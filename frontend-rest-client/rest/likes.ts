import { AxiosResponse } from 'axios';
import { makeRequest } from '../makeRequest';

interface Like {
  id: string;
  name: string;
  likedAt: string;
}

interface LikesResponse {
  count: number;
  likes: Like[];
}

interface AddLikeResponse {
  success: boolean;
  message: string;
  count: number;
  likes: Like[];
}

// Fetch all likes
export const getAllLikesFromDB = (): Promise<AxiosResponse<LikesResponse>> => {
  return makeRequest({
    url: '/api/likes',
    method: 'GET',
  });
};

// Add a like
export const persistNewLikeToDB = (
  name: string
): Promise<AxiosResponse<AddLikeResponse>> => {
  return makeRequest({
    url: '/api/likes',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    data: { name },
  });
};
