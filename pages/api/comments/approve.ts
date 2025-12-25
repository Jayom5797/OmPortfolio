import type { NextApiRequest, NextApiResponse } from 'next';
import pool from '../../../utils/db';

interface Comment {
  id: number;
  author: string;
  comment: string;
  avatar: number;
  created_at: string;
  is_approved: boolean;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  if (req.method === 'POST') {
    try {
      const { commentId, adminKey } = req.body;

      if (adminKey !== process.env.ADMIN_SECRET_KEY) {
        res.status(401).json({ error: 'Unauthorized' });
        return;
      }

      if (!commentId) {
        res.status(400).json({ error: 'Comment ID is required' });
        return;
      }

      await pool.query('UPDATE comments SET is_approved = true WHERE id = $1', [
        commentId,
      ]);

      res.status(200).json({ success: true, message: 'Comment approved' });
    } catch (error) {
      console.error('Comment approval error:', error);
      res.status(500).json({ error: 'Failed to approve comment' });
    }
    return;
  }

  if (req.method === 'GET') {
    try {
      const { adminKey } = req.query;

      if (adminKey !== process.env.ADMIN_SECRET_KEY) {
        res.status(401).json({ error: 'Unauthorized' });
        return;
      }

      const result = await pool.query<Comment>(
        'SELECT id, author, comment, avatar, created_at, is_approved FROM comments ORDER BY created_at DESC'
      );

      const comments = result.rows.map((row) => ({
        _id: row.id.toString(),
        author: row.author,
        comment: row.comment,
        avatar: row.avatar,
        createdAt: row.created_at,
        isApproved: row.is_approved,
      }));

      res.status(200).json(comments);
    } catch (error) {
      console.error('Comments fetch error:', error);
      res.status(500).json({ error: 'Failed to fetch comments' });
    }
    return;
  }

  res.status(405).json({ error: 'Method not allowed' });
}
