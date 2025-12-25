import type { NextApiRequest, NextApiResponse } from 'next';
import pool from '../../../utils/db';
import fs from 'fs';
import path from 'path';

// API endpoint to initialize database tables
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  // Simple security check
  const { adminKey } = req.body;
  if (adminKey !== process.env.ADMIN_SECRET_KEY) {
    res.status(401).json({ error: 'Unauthorized' });
    return;
  }

  try {
    // Read SQL file
    const sqlPath = path.join(process.cwd(), 'scripts', 'init-db.sql');
    const sql = fs.readFileSync(sqlPath, 'utf8');

    // Execute SQL
    await pool.query(sql);

    res
      .status(200)
      .json({ success: true, message: 'Database initialized successfully' });
  } catch (error) {
    console.error('Database initialization error:', error);
    res
      .status(500)
      .json({ error: 'Failed to initialize database', details: String(error) });
  }
}
