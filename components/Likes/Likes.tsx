import React, { useCallback, useEffect, useState } from 'react';
import { sendEmailNotification } from '../../utils/sendEmailNotification';
import * as Styled from './Likes.styles';
import ActionButton from '../Portfolio/ActionButton/ActionButton';
import { Formik, Form } from 'formik';
import FormikTextField from '../Portfolio/FormikTextField/FormikTextField';
import { FiThumbsUp } from 'react-icons/fi';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';
import WindowLoaderSkeleton from '../WindowLoaderSkeleton/WindowLoaderSkeleton';

/**
 *Renders likes counter
 *@function Likes
 *@returns {JSX.Element} - Rendered CardContent component
 */
const Likes = (): JSX.Element => {
  const { likesCount, areLikesFetching, isLoading, isLikePersisted } = useTypedSelector((state) => state.likes);
  const { getAllLikes, postLike, clearLikeState } = useActions();
  // Remove user_id state, will use Formik


  useEffect(() => {
    getAllLikes();
  }, [isLikePersisted]);

  const handlePostLike = async (values: { name: string }, { resetForm }: any) => {
    if (!values.name) {
      alert('Please enter your name!');
      return;
    }
    postLike(values.name);
    clearLikeState();
    await sendEmailNotification('like', 'Someone liked your portfolio!', values.name);
    resetForm();
  };

  return (
    <Styled.Container>
      {areLikesFetching ? (
        <WindowLoaderSkeleton />
      ) : (
        <Styled.LikesWrapper>
          <Styled.Message>
            {isLikePersisted ? '🎉 Thank you 🎉' : `👋 Hey! Let's count us.`}
          </Styled.Message>
          <Styled.LikeCounter isLikePersisted={isLikePersisted}>
            👍
            {String(likesCount).split('').map((digit, id) => (
              <Styled.Digit key={id * Number(digit)}>{digit}</Styled.Digit>
            ))}
          </Styled.LikeCounter>
          <Formik
            initialValues={{ name: '' }}
            onSubmit={handlePostLike}
          >
            {({ isSubmitting }) => (
              <Form style={{ width: '100%' }}>
                <FormikTextField
                  placeholder="Your name"
                  name="name"
                  type="text"
                  disabled={isLikePersisted}
                />
                <Styled.ButtonWrapper>
                  <ActionButton
                    buttonText={isLikePersisted ? 'Liked!' : 'CONTRIBUTE'}
                    icon={<FiThumbsUp className={'action-icon'} />}
                    type="submit"
                    isLoading={isLoading || isSubmitting}
                    disabled={isLikePersisted}
                  />
                </Styled.ButtonWrapper>
              </Form>
            )}
          </Formik>
        </Styled.LikesWrapper>
      )}
    </Styled.Container>
  );
};

export default Likes;
