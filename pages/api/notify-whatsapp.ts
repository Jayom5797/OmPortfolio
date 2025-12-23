import type { NextApiRequest, NextApiResponse } from 'next';
import twilio from 'twilio';

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const from = process.env.TWILIO_WHATSAPP_FROM;
const to = process.env.TWILIO_WHATSAPP_TO;

const client = twilio(accountSid, authToken);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const { type, message } = req.body;

  if (!type || !message) {
    res.status(400).json({ error: 'Missing type or message' });
    return;
  }

  if (!from || !to) {
    res.status(500).json({ error: 'Twilio configuration missing' });
    return;
  }

  try {
    const msg = await client.messages.create({
      from,
      to,
      body: `[${type.toUpperCase()}] ${message}`,
    });
    res.status(200).json({ success: true, sid: msg.sid });
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : 'Unknown error';
    res.status(500).json({ error: errorMessage });
  }
}
