import { Redis } from '@upstash/redis'

// Returns a Redis client when Upstash env vars are configured, otherwise null.
// This lets the blog build and run locally without view-count credentials.
export const redis =
  process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN
    ? new Redis({
        url: process.env.UPSTASH_REDIS_REST_URL,
        token: process.env.UPSTASH_REDIS_REST_TOKEN,
      })
    : null
