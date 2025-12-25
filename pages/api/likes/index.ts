import type { NextApiRequest, NextApiResponse } from 'next';
import pool from '../../../utils/db';

interface Like {
  id: number;
  name: string;
  liked_at: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  // Debug: Check if DATABASE_URL is loaded
  console.log('[LIKES API] DATABASE_URL exists:', !!process.env.DATABASE_URL);
  console.log(
    '[LIKES API] DATABASE_URL value:',
    process.env.DATABASE_URL ? 'SET' : 'NOT SET'
  );

  if (req.method === 'GET') {
    try {
      console.log('[LIKES API] GET request received');

      const result = await pool.query<Like>(
        'SELECT id, name, liked_at FROM likes ORDER BY id ASC'
      );

      const likes = result.rows.map((row) => ({
        id: row.id.toString(),
        name: row.name,
        likedAt: row.liked_at,
      }));

      console.log('[LIKES API] Retrieved likes:', likes.length);
      res.status(200).json({ count: likes.length, likes });
    } catch (error) {
      console.error('[LIKES API] GET Error:', error);
      res.status(200).json({ count: 0, likes: [] });
    }
    return;
  }

  if (req.method === 'POST') {
    try {
      console.log('[LIKES API] POST request received');
      console.log('[LIKES API] Request body:', req.body);

      const { name } = req.body;

      if (!name) {
        console.error('[LIKES API] No name provided');
        res.status(400).json({ error: 'Name is required' });
        return;
      }

      // Try to insert, will fail if name already exists (UNIQUE constraint)
      try {
        await pool.query('INSERT INTO likes (name) VALUES ($1)', [name]);
        console.log('[LIKES API] Successfully added like for:', name);
      } catch (insertError) {
        const error = insertError as { code?: string };
        // Check if it's a duplicate key error
        if (error.code === '23505') {
          console.log('[LIKES API] User already liked:', name);
          // Get current likes
          const result = await pool.query<Like>(
            'SELECT id, name, liked_at FROM likes ORDER BY id ASC'
          );
          const likes = result.rows.map((row) => ({
            id: row.id.toString(),
            name: row.name,
            likedAt: row.liked_at,
          }));

          res.status(200).json({
            success: true,
            message: 'Already liked',
            count: likes.length,
            likes,
          });
          return;
        }
        throw insertError;
      }

      // Get updated likes
      const result = await pool.query<Like>(
        'SELECT id, name, liked_at FROM likes ORDER BY id ASC'
      );

      const likes = result.rows.map((row) => ({
        id: row.id.toString(),
        name: row.name,
        likedAt: row.liked_at,
      }));

      console.log('[LIKES API] New count:', likes.length);
      res.status(200).json({
        success: true,
        message: 'Like added',
        count: likes.length,
        likes,
      });
    } catch (error) {
      const err = error as Error;
      console.error('[LIKES API] POST Error:', error);
      console.error('[LIKES API] Error message:', err.message);
      console.error('[LIKES API] Error stack:', err.stack);
      res
        .status(500)
        .json({ error: 'Failed to add like', details: err.message });
    }
    return;
  }

  res.status(405).json({ error: 'Method not allowed' });
}
