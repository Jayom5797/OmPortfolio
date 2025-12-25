import {
  LikeAction,
  LikesActionTypes,
} from '../../types/redux/likes-reducer-types';
import { Dispatch } from 'redux';
import {
  getAllLikesFromDB,
  persistNewLikeToDB,
} from '../../frontend-rest-client/rest/likes';
import { getErrorMessage } from '../../utils/getErrorMessage';

export const getAllLikes = () => {
  return async (dispatch: Dispatch<LikeAction>): Promise<void> => {
    dispatch({ type: LikesActionTypes.LOAD_ALL_LIKES });
    try {
      const { data } = await getAllLikesFromDB();
      dispatch({
        type: LikesActionTypes.LIKES_DID_LOAD,
        payload: data.count || 0,
      });
    } catch (error) {
      dispatch({
        type: LikesActionTypes.LIKES_LOAD_ERROR,
        payload: getErrorMessage(error),
      });
    }
  };
};

export const postLike = (name: string) => {
  return async (dispatch: Dispatch<LikeAction>): Promise<void> => {
    dispatch({ type: LikesActionTypes.PERSIST_LIKE });
    try {
      const { data } = await persistNewLikeToDB(name);
      dispatch({
        type: LikesActionTypes.LIKE_WAS_PERSISTED,
        payload: true,
      });
      // Update the count after successful like
      dispatch({
        type: LikesActionTypes.LIKES_DID_LOAD,
        payload: data.count || 0,
      });
    } catch (error) {
      dispatch({
        type: LikesActionTypes.LIKE_PERSIST_ERROR,
        payload: getErrorMessage(error),
      });
    }
  };
};
/**
 *@Action creator, will dispatch action clear likes state
 *@function clearState
 *@returns {function} - Redux thunk function
 */
export const clearLikeState = () => {
  return async (dispatch: Dispatch<LikeAction>): Promise<void> => {
    dispatch({ type: LikesActionTypes.CLEAR_STATE });
  };
};
