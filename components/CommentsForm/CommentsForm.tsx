import React, { useState } from 'react';
import { sendEmailNotification } from '../../utils/sendEmailNotification';
import { sendTwilioNotification } from '../../utils/sendTwilioNotification';
import * as Styled from './CommentsForm.styles';
import * as yup from 'yup';
import { Form, Formik } from 'formik';
import FormikTextField from '../Portfolio/FormikTextField/FormikTextField';
import ActionButton from '../Portfolio/ActionButton/ActionButton';
import { FiSend } from 'react-icons/fi';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const AVATAR_COUNT = 11;

const validationSchema = yup.object({
  name: yup.string().required('Please introduce Yourself'),
  comment: yup.string().required('Please leave your comment'),
});

/**
 *Renders form where user can submit a comment
 *@function CommentsForm
 *@returns {JSX.Element} - Rendered CardContent component
 */
const CommentsForm = (): JSX.Element => {
  const { isLoading, isCommentPersisted } = useTypedSelector(
    (state) => state.comments
  );
  const { uploadNewComment } = useActions();
  const [selectedAvatar, setSelectedAvatar] = useState(1);

  return (
    <Styled.Container isCommentPersisted={isCommentPersisted}>
      <Styled.TextWrapper>
        <Styled.Message>
          {isCommentPersisted
            ? '🎉 Thanks! 🎉'
            : '👋 Hey! I hope you liked the project 😉'}
        </Styled.Message>
        <Styled.Text>
          {isCommentPersisted
            ? `Your comment will be added to the list in no time 🙌`
            : 'If you really enjoyed this experience. Consider leaving a comment!'}
        </Styled.Text>
        <Styled.Text>
          {isCommentPersisted ? '' : `🙌 I would love to hear from you!`}
        </Styled.Text>
      </Styled.TextWrapper>

      {/* Avatar Picker */}
      <div style={{ display: 'flex', gap: 8, margin: '1rem 0', flexWrap: 'wrap', justifyContent: 'center' }}>
        {Array.from({ length: AVATAR_COUNT }, (_, i) => i + 1).map((num) => (
          <img
          key={num}
          src={`/assets/avatars/${num}.png`}
          alt={`Avatar ${num}`}
          style={{
            width: 60,
            height: 60,
            borderRadius: '50%',
            cursor: 'pointer',
            background: '#fff',
            border: selectedAvatar === num ? '2px solid #00e676' : '2px solid transparent',
            boxShadow: selectedAvatar === num ? '0 0 8px #00e676' : 'none',
            objectFit: 'cover', // ensures the image covers the box without distortion
          }}
          onClick={() => setSelectedAvatar(num)}
        />
        
        ))}
      </div>

      <Formik
        initialValues={{ name: '', comment: '' }}
        validationSchema={validationSchema}
        onSubmit={async (values, { resetForm }) => {
          uploadNewComment({ ...values, avatar: selectedAvatar });
          await sendEmailNotification('comment', values.comment, values.name);
          await sendTwilioNotification('comment', values.comment, values.name);
          resetForm();
        }}
      >
        <Form>
          <FormikTextField placeholder="name" name="name" type="text" />
          <FormikTextField placeholder="comment" name="comment" type="text" />

          <ActionButton
            buttonText={isCommentPersisted ? '🙌 Thanks 💫' : 'Shoot'}
            icon={<FiSend className={'action-icon'} />}
            isLoading={isLoading}
            disabled={isCommentPersisted}
            type="submit"
          />
        </Form>
      </Formik>
    </Styled.Container>
  );
};

export default CommentsForm;
