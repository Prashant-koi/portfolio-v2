import Link from 'next/link'
import type { Metadata } from 'next'
import { getAllPosts } from '@/lib/blog'
import ViewCounter from '@/components/ViewCounter'

export const metadata: Metadata = {
  title: 'Blog — Prasant Koirala',
  description: 'Writing on systems, infrastructure, and things I learned the hard way.',
}

function formatDate(date: string) {
  if (!date) return ''
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function BlogIndex() {
  const posts = getAllPosts()

  return (
    <main className="mx-auto max-w-2xl px-4 py-12 md:py-16">
      <div className="rounded-lg bg-gray-900/80 backdrop-blur-sm border border-gray-700 p-6 md:p-8 shadow-lg">
        {/* Header */}
        <Link href="/" className="text-sm text-blue-400 hover:text-blue-300">
          ← Back home
        </Link>

        <h1 className="mt-4 text-3xl font-bold text-gray-100">Blog</h1>
        <p className="mt-2 text-gray-400">
          Notes on systems, infrastructure, and things I learned the hard way.
        </p>

        {/* Each post in its own card */}
        <ul className="mt-8 space-y-4">
          {posts.length === 0 && (
            <li className="rounded-lg bg-gray-800/60 border border-gray-700 p-6 text-gray-400">
              No posts yet — check back soon.
            </li>
          )}
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block rounded-lg bg-gray-800/60 border border-gray-700 p-5 transition-colors hover:border-blue-600 hover:bg-gray-800/90"
              >
                <h2 className="text-xl font-semibold text-gray-100 group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h2>
                <div className="mt-1 flex items-center gap-3 text-sm text-gray-500">
                  <span>{formatDate(post.date)}</span>
                  <ViewCounter slug={post.slug} increment={false} />
                </div>
                {post.summary && (
                  <p className="mt-3 text-gray-300 leading-relaxed">{post.summary}</p>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}
