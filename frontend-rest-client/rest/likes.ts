import { AxiosResponse } from 'axios';
import { makeRequest } from '../makeRequest';

// Fetch all likes
export const getAllLikesFromDB = (): Promise<AxiosResponse<any[]>> => {
  return makeRequest({
    url: '/api/likes',
    method: 'GET',
  });
};

// Add a like
export const persistNewLikeToDB = (user_id: string): Promise<AxiosResponse<any>> => {
  return makeRequest({
    url: '/api/likes',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    data: { user_id },
  });
};
