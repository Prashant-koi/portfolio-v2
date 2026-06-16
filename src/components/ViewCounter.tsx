'use client'

import { useEffect, useState } from 'react'

// increment=true (post page): POST to bump the count once on mount.
// increment=false (listing): GET to display the count without changing it.
export default function ViewCounter({
  slug,
  increment = true,
}: {
  slug: string
  increment?: boolean
}) {
  const [views, setViews] = useState<number | null>(null)

  useEffect(() => {
    fetch(`/api/views/${slug}`, { method: increment ? 'POST' : 'GET' })
      .then((res) => res.json())
      .then((data) => setViews(data.views))
      .catch(() => setViews(null))
  }, [slug, increment])

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
