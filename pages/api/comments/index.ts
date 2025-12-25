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

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  if (req.method === 'GET') {
    try {
      // Get all comments from Redis
      const comments = (await redis.get<Comment[]>('comments')) || [];

      // Filter only approved comments and sort by date (newest first)
      const approvedComments = comments
        .filter((c) => c.isApproved)
        .sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );

      res.status(200).json(approvedComments);
    } catch (error) {
      console.error('Redis error:', error);
      res.status(200).json([]);
    }
    return;
  }

  if (req.method === 'POST') {
    try {
      const { name, comment, avatar } = req.body;

      if (!name || !comment) {
        res.status(400).json({ error: 'Name and comment are required' });
        return;
      }

      // Get existing comments
      const comments = (await redis.get<Comment[]>('comments')) || [];

      // Create new comment
      const newComment: Comment = {
        _id: Date.now().toString(),
        author: name,
        comment,
        avatar: avatar || 1,
        createdAt: new Date().toISOString(),
        isApproved: false, // Requires manual approval
      };

      // Add to comments array
      comments.push(newComment);

      // Save back to Redis
      await redis.set('comments', comments);

      res
        .status(201)
        .json({ success: true, message: 'Comment submitted for approval' });
    } catch (error) {
      console.error('Redis error:', error);
      res.status(500).json({ error: 'Failed to save comment' });
    }
    return;
  }

  res.status(405).json({ error: 'Method not allowed' });
}
