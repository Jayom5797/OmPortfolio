import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    return res.status(200).json([]);
  }
  if (req.method === 'POST') {
    return res.status(201).json({ success: true });
  }
  res.status(405).end();
}
