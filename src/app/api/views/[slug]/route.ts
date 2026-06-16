import { NextResponse } from 'next/server'
import { createHash } from 'crypto'
import { redis } from '@/lib/redis'

const key = (slug: string) => `views:${slug}`

// How long one visitor is deduped per post. A reload within this window
// (or someone spamming refresh) will not increment the count again.
const DEDUP_WINDOW_SECONDS = 60 * 60 * 24 // 24 hours

// Build an anonymous, per-visitor dedup key. We hash the IP (never store it
// raw) together with the slug so dedup is independent for each post.
function dedupKey(slug: string, request: Request) {
  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
    request.headers.get('x-real-ip') ||
    'unknown'
  const hash = createHash('sha256').update(`${ip}:${slug}`).digest('hex').slice(0, 32)
  return `views:dedup:${slug}:${hash}`
}

// GET: read the current view count without incrementing.
export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params
  if (!redis) return NextResponse.json({ views: null })

  const views = (await redis.get<number>(key(slug))) ?? 0
  return NextResponse.json({ views })
}

// POST: increment once per visitor per window, then return the count.
export async function POST(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params
  if (!redis) return NextResponse.json({ views: null })

  // SET NX only succeeds the first time this visitor is seen in the window.
  // If it fails, they've already been counted — return the current total.
  const isFirstView = await redis.set(dedupKey(slug, request), '1', {
    nx: true,
    ex: DEDUP_WINDOW_SECONDS,
  })

  if (!isFirstView) {
    const views = (await redis.get<number>(key(slug))) ?? 0
    return NextResponse.json({ views })
  }

  const views = await redis.incr(key(slug))
  return NextResponse.json({ views })
}
