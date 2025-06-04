'use client'
import '../app/globals.css'

import { useState, useEffect } from 'react'
import { GitHubRepo } from '@/types/github'
import { fetchGitHubRepos } from '@/lib/github'

export default function GitHubProjects() {
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadRepos = async () => {
      try {
        const data = await fetchGitHubRepos()
        setRepos(data)
      } catch (err) {
        setError('Unable to load GitHub projects. Please check back later.')
      } finally {
        setLoading(false)
      }
    }

    loadRepos()
  }, [])

  if (loading) {
    return (
      <section id="github-projects">
        <h2>📂 Latest GitHub Projects</h2>
        <p>Loading projects...</p>
      </section>
    )
  }

  if (error) {
    return (
      <section id="github-projects">
        <h2>📂 Latest GitHub Projects</h2>
        <p>{error}</p>
      </section>
    )
  }

  return (
    <section id="github-projects">
      <h2>📂 Latest GitHub Projects</h2>
      <div id="github-repos-container">
        {repos.map((repo) => (
          <div key={repo.id} className="github-repo">
            <h3>
              <a 
                href={repo.html_url} 
                className="repo-link" 
                target="_blank"
                rel="noopener noreferrer"
              >
                {repo.name}
              </a>
              <span className="github-stats">
                ⭐ {repo.stargazers_count}
              </span>
            </h3>
            <p>{repo.description || 'No description available'}</p>
            <div className="skills-list">
              <span className="skill-tag">
                {repo.language || 'Not specified'}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}