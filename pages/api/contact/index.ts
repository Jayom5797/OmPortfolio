import type { NextApiRequest, NextApiResponse } from 'next';
import redis from '../../../utils/redisClient';

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
}

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

      // Get existing contacts
      const contacts = (await redis.get<ContactMessage[]>('contacts')) || [];

      // Create new contact message
      const newContact: ContactMessage = {
        id: Date.now().toString(),
        name,
        email,
        message,
        createdAt: new Date().toISOString(),
      };

      // Add to contacts array
      contacts.push(newContact);

      // Save to Redis
      await redis.set('contacts', contacts);

      res
        .status(200)
        .json({ success: true, message: 'Message received successfully' });
    } catch (error) {
      console.error('Redis error:', error);
      res.status(500).json({ error: 'Failed to save contact message' });
    }
    return;
  }

  res.status(405).json({ error: 'Method not allowed' });
}
