import { Dispatch } from 'redux';
import {
  CommentAction,
  CommentActionTypes,
} from '../../types/redux/comments-reducer-types';
import {
  getAllApprovedCommentsFromDB,
  persistNewCommentToDB,
} from '../../frontend-rest-client/rest/comments';
import { getErrorMessage } from '../../utils/getErrorMessage';

export const loadAllApprovedComments = () => {
  return async (dispatch: Dispatch<CommentAction>): Promise<void> => {
    dispatch({ type: CommentActionTypes.LOAD_ALL_COMMENTS });
    try {
      const { data } = await getAllApprovedCommentsFromDB();
      dispatch({
        type: CommentActionTypes.COMMENTS_DID_LOAD,
        payload: { total: data.length, comments: data },
      });
    } catch (error) {
      if (error instanceof Error) {
        dispatch({
          type: CommentActionTypes.COMMENTS_LOAD_ERROR,
          payload: error.message,
        });
      }
    }
  };
};

export const uploadNewComment = (newComment: { name: string; comment: string; avatar: number }) => {
  return async (dispatch: Dispatch<CommentAction>): Promise<void> => {
    dispatch({ type: CommentActionTypes.PERSIST_COMMENT });
    try {
      await persistNewCommentToDB(newComment);
      dispatch({
        type: CommentActionTypes.COMMENT_WAS_PERSISTED,
        payload: true,
      });
    } catch (error) {
      dispatch({
        type: CommentActionTypes.COMMENT_PERSIST_ERROR,
        payload: getErrorMessage(error),
      });
    }
  };
};
