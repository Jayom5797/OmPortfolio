import type { NextApiRequest, NextApiResponse } from 'next';
import twilio from 'twilio';

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const from = process.env.TWILIO_WHATSAPP_FROM;
const to = process.env.TWILIO_WHATSAPP_TO;

const client = twilio(accountSid, authToken);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { type, message } = req.body;

  if (!type || !message) {
    return res.status(400).json({ error: 'Missing type or message' });
  }

  try {
    const msg = await client.messages.create({
      from,
      to,
      body: `[${type.toUpperCase()}] ${message}`,
    });
    return res.status(200).json({ success: true, sid: msg.sid });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
}
