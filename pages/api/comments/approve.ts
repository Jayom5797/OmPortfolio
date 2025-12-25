import type { NextApiRequest, NextApiResponse } from 'next';
import redis from '../../../utils/redisClient';

interface Comment {
  _id: string;
  author: string;
  comment: string;
  avatar: number;
  createdAt: string;
  isApproved: boolean;
}

// Simple admin endpoint to approve comments
// In production, add proper authentication
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  if (req.method === 'POST') {
    try {
      const { commentId, adminKey } = req.body;

      // Simple admin key check (replace with proper auth in production)
      if (adminKey !== process.env.ADMIN_SECRET_KEY) {
        res.status(401).json({ error: 'Unauthorized' });
        return;
      }

      if (!commentId) {
        res.status(400).json({ error: 'Comment ID is required' });
        return;
      }

      // Get all comments
      const comments = (await redis.get<Comment[]>('comments')) || [];

      // Find and approve the comment
      const commentIndex = comments.findIndex((c) => c._id === commentId);

      if (commentIndex === -1) {
        res.status(404).json({ error: 'Comment not found' });
        return;
      }

      comments[commentIndex].isApproved = true;

      // Save back to Redis
      await redis.set('comments', comments);

      res.status(200).json({ success: true, message: 'Comment approved' });
    } catch (error) {
      console.error('Redis error:', error);
      res.status(500).json({ error: 'Failed to approve comment' });
    }
    return;
  }

  if (req.method === 'GET') {
    try {
      const { adminKey } = req.query;

      // Simple admin key check
      if (adminKey !== process.env.ADMIN_SECRET_KEY) {
        res.status(401).json({ error: 'Unauthorized' });
        return;
      }

      // Get all comments (including unapproved)
      const comments = (await redis.get<Comment[]>('comments')) || [];

      res.status(200).json(comments);
    } catch (error) {
      console.error('Redis error:', error);
      res.status(500).json({ error: 'Failed to fetch comments' });
    }
    return;
  }

  res.status(405).json({ error: 'Method not allowed' });
}
