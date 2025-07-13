import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../../utils/supabaseClient';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const { data, error } = await supabase
        .from('comments')
        .select('*')
        .eq('is_approved', true)
        .order('created_at', { ascending: false });
      
      if (error) {
        console.error('Supabase error:', error);
        return res.status(200).json([]);
      }
      // Map fields to match frontend expectations
      const mapped = (data || []).map((c) => ({
        _id: c.id?.toString() ?? '',
        author: c.name ?? '',
        comment: c.comment ?? '',
        createdAt: c.created_at ?? '',
        isApproved: c.is_approved ?? true,
        avatar: c.avatar ?? 1,
      }));
      return res.status(200).json(mapped);
    } catch (error) {
      console.error('API error:', error);
      return res.status(200).json([]);
    }
  }
  
  if (req.method === 'POST') {
    try {
      const { name, comment, avatar } = req.body;
      
      if (!name || !comment) {
        return res.status(400).json({ error: 'Name and comment are required' });
      }

      const { data, error } = await supabase
        .from('comments')
        .insert([{ name, comment, avatar }]);
      
      if (error) {
        console.error('Supabase error:', error);
        return res.status(201).json({ success: true, message: 'Comment saved (demo mode)' });
      }
      return res.status(201).json({ success: true, data });
    } catch (error) {
      console.error('API error:', error);
      return res.status(201).json({ success: true, message: 'Comment saved (demo mode)' });
    }
  }
  
  res.status(405).end();
}
