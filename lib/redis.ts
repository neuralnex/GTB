import Redis from 'ioredis'

let redis: Redis | null = null

export function getRedisClient(): Redis {
  if (redis) {
    return redis
  }

  const redisUrl = process.env.REDIS_URL || ''
  
  redis = new Redis(redisUrl, {
    maxRetriesPerRequest: 3,
    retryStrategy: (times) => {
      const delay = Math.min(times * 50, 2000)
      return delay
    },
  })

  return redis
}

