import { AxiosResponse } from 'axios';
import { makeRequest } from '../makeRequest';

// Fetch like count
export const getAllLikesFromDB = (): Promise<
  AxiosResponse<{ count: number }>
> => {
  return makeRequest({
    url: '/api/likes',
    method: 'GET',
  });
};

// Add a like
export const persistNewLikeToDB = (): Promise<
  AxiosResponse<{ success: boolean; count: number }>
> => {
  return makeRequest({
    url: '/api/likes',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });
};
