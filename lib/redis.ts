import Redis from 'ioredis'

let redis: Redis | null = null

export function getRedisClient(): Redis {
  if (redis) {
    return redis
  }

  const redisUrl = process.env.REDIS_URL || 'redis://default:zfTVPsWfq7rK1EgEjujMz3yrgqSVkNkO@redis-18335.c278.us-east-1-4.ec2.cloud.redislabs.com:18335'
  
  redis = new Redis(redisUrl, {
    maxRetriesPerRequest: 3,
    retryStrategy: (times) => {
      const delay = Math.min(times * 50, 2000)
      return delay
    },
  })

  return redis
}

