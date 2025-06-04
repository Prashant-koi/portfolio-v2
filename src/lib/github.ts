import { GitHubRepo } from '@/types/github'

export async function fetchGitHubRepos(): Promise<GitHubRepo[]> {
  const response = await fetch('https://api.github.com/users/Prashant-koi/repos?sort=created&direction=desc&per_page=10');
  
  if (!response.ok) {
    throw new Error('Failed to fetch GitHub repos');
  }
  
  const repos: GitHubRepo[] = await response.json();
  
  return repos
    .filter(repo => repo.name.toLowerCase() !== 'portfolio')
    .slice(0, 5);
}