import Link from 'next/link'
import type { Metadata } from 'next'
import { getAllPosts } from '@/lib/blog'

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
        <Link href="/" className="text-sm text-blue-400 hover:text-blue-300">
          ← Back home
        </Link>

        <h1 className="mt-4 text-3xl font-bold text-white">Blog</h1>
        <p className="mt-2 text-gray-400">
          Notes on systems, infrastructure, and things I learned the hard way.
        </p>

        <ul className="mt-8 space-y-6">
          {posts.length === 0 && (
            <li className="text-gray-400">No posts yet — check back soon.</li>
          )}
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="group block">
                <h2 className="text-xl font-semibold text-gray-100 group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h2>
                <p className="mt-1 text-sm text-gray-500">{formatDate(post.date)}</p>
                <p className="mt-2 text-gray-300 leading-relaxed">{post.summary}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}
