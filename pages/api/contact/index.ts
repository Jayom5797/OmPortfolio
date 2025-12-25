import type { NextApiRequest, NextApiResponse } from 'next';
import pool from '../../../utils/db';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  if (req.method === 'POST') {
    try {
      const { name, email, message } = req.body;

      if (!name || !email || !message) {
        res
          .status(400)
          .json({ error: 'Name, email, and message are required' });
        return;
      }

      await pool.query(
        'INSERT INTO contacts (name, email, message) VALUES ($1, $2, $3)',
        [name, email, message]
      );

      res
        .status(200)
        .json({ success: true, message: 'Message received successfully' });
    } catch (error) {
      console.error('Contact POST error:', error);
      res.status(500).json({ error: 'Failed to save contact message' });
    }
    return;
  }

  res.status(405).json({ error: 'Method not allowed' });
}
