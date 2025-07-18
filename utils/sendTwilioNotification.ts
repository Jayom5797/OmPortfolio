// Sends a WhatsApp message via Twilio using the Next.js API route
export async function sendTwilioNotification(
  type: 'comment' | 'like' | 'contact',
  message: string,
  fromName?: string
) {
  const templateMsg = `🚨 New Portfolio Alert!
${type}

From: ${fromName || 'Unknown'}

Message:
${message}

This is an automated notification from your portfolio site.
Windows OS Inspired Portfolio`;

  await fetch('/api/notify-whatsapp', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ type, message: templateMsg }),
  });
}


