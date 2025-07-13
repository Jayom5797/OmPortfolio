import { AxiosResponse } from 'axios';
import { makeRequest } from '../makeRequest';

// Send contact form
export const sendEmailWith = (contactFormData: { name: string; email: string; message: string }): Promise<AxiosResponse<any>> => {
  return makeRequest({
    url: '/api/contact',
    method: 'POST',
    data: contactFormData,
    headers: { 'Content-Type': 'application/json' },
  });
};
