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
  if (req.method === 'GET') {
    try {
      const result = await pool.query<Comment>(
        'SELECT id, author, comment, avatar, created_at, is_approved FROM comments WHERE is_approved = true ORDER BY created_at DESC'
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
      console.error('Comments GET error:', error);
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

      await pool.query(
        'INSERT INTO comments (author, comment, avatar) VALUES ($1, $2, $3)',
        [name, comment, avatar || 1]
      );

      res.status(201).json({
        success: true,
        message: 'Comment submitted for approval',
      });
    } catch (error) {
      console.error('Comments POST error:', error);
      res.status(500).json({ error: 'Failed to save comment' });
    }
    return;
  }

  res.status(405).json({ error: 'Method not allowed' });
}
