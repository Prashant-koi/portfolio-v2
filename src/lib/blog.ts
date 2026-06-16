import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog')

export interface PostMeta {
  slug: string
  title: string
  date: string
  summary: string
}

export interface Post extends PostMeta {
  content: string
}

function readPostFile(slug: string): Post {
  const fullPath = path.join(BLOG_DIR, `${slug}.mdx`)
  const raw = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(raw)

  return {
    slug,
    title: data.title ?? slug,
    date: data.date ?? '',
    summary: data.summary ?? '',
    content,
  }
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return []
  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace(/\.mdx$/, ''))
}

export function getPostBySlug(slug: string): Post | null {
  try {
    return readPostFile(slug)
  } catch {
    return null
  }
}

export function getAllPosts(): PostMeta[] {
  return getAllSlugs()
    .map((slug) => {
      const { content: _content, ...meta } = readPostFile(slug)
      void _content
      return meta
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}
