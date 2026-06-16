'use client'

import { useEffect, useState } from 'react'

export default function ViewCounter({ slug }: { slug: string }) {
  const [views, setViews] = useState<number | null>(null)

  useEffect(() => {
    // Increment once on mount, then show the returned total.
    fetch(`/api/views/${slug}`, { method: 'POST' })
      .then((res) => res.json())
      .then((data) => setViews(data.views))
      .catch(() => setViews(null))
  }, [slug])

  if (views === null) return null

  return (
    <>
      <span>·</span>
      <span>
        {views.toLocaleString()} {views === 1 ? 'view' : 'views'}
      </span>
    </>
  )
}
