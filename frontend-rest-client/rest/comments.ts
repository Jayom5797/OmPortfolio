import { AxiosResponse } from 'axios';
import { makeRequest } from '../makeRequest';

// Fetch all comments
export const getAllApprovedCommentsFromDB = (): Promise<AxiosResponse<any[]>> => {
  return makeRequest({
    url: '/api/comments',
    method: 'GET',
  });
};

// Add a comment
export const persistNewCommentToDB = (newComment: { name: string; comment: string; avatar: number }): Promise<AxiosResponse<any>> => {
  return makeRequest({
    url: '/api/comments',
    method: 'POST',
    data: newComment,
    headers: { 'Content-Type': 'application/json' },
  });
};
