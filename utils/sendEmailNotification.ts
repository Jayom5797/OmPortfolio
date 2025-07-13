import emailjs from '@emailjs/browser';

export function sendEmailNotification(
  type: 'comment' | 'like' | 'contact',
  message: string,
  fromName: string = 'Portfolio Bot'
) {
  return emailjs.send(
    'service_8anakn7',      // Replace with your EmailJS service ID
    'template_ewnv14e',     // Replace with your EmailJS template ID
    {
      type,
      message,
      from_name: fromName,
    },
    'KJqDWhM6XLHecE0De'       // Replace with your EmailJS public key
  );
}
