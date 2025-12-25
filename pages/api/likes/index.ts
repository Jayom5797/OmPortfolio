import type { NextApiRequest, NextApiResponse } from 'next';
import redis from '../../../utils/redisClient';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  if (req.method === 'GET') {
    try {
      // Get like count from Redis
      const count = (await redis.get<number>('likes:count')) || 0;

      res.status(200).json({ count });
    } catch (error) {
      console.error('Redis error:', error);
      res.status(200).json({ count: 0 });
    }
    return;
  }

  if (req.method === 'POST') {
    try {
      // Increment like count
      const newCount = await redis.incr('likes:count');

      res.status(200).json({ success: true, count: newCount });
    } catch (error) {
      console.error('Redis error:', error);
      res.status(500).json({ error: 'Failed to increment likes' });
    }
    return;
  }

  res.status(405).json({ error: 'Method not allowed' });
}
