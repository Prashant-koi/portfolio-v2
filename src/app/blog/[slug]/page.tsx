import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import { getAllSlugs, getPostBySlug } from '@/lib/blog'
import ViewCounter from '@/components/ViewCounter'
import 'highlight.js/styles/github-dark.css'

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  return {
    title: `${post.title} — Prasant Koirala`,
    description: post.summary,
  }
}

function formatDate(date: string) {
  if (!date) return ''
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  return (
    <main className="mx-auto max-w-2xl px-4 py-12 md:py-16">
      <article className="rounded-lg bg-gray-900/80 backdrop-blur-sm border border-gray-700 p-6 md:p-8 shadow-lg">
        <Link href="/blog" className="text-sm text-blue-400 hover:text-blue-300">
          ← All posts
        </Link>

        <h1 className="mt-4 text-3xl font-bold text-gray-100">{post.title}</h1>
        <div className="mt-2 flex items-center gap-3 text-sm text-gray-500">
          <span>{formatDate(post.date)}</span>
          <ViewCounter slug={post.slug} />
        </div>

        <div className="prose prose-invert mt-8 max-w-none prose-pre:bg-black/50 prose-a:text-blue-400">
          <Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]}>
            {post.content}
          </Markdown>
        </div>
      </article>
    </main>
  )
}
