import styled from 'styled-components';
import { likeKeyframe, slidInCenter } from '../../design-system/reusableCss';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  background: transparent;
`;

export const LikesWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.lg};
  animation: ${slidInCenter} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  padding: 2.5rem 2.5rem 2rem 2.5rem;
  max-width: 600px;
  width: 100%;
  background-image: ${({ theme }) => theme.gradients.lightGrayGradient};
  border-radius: 1.2rem;
  box-shadow: 0 4px 24px rgba(0,0,0,0.09);
  margin-top: 5vh;
`;

interface Props {
  isLikePersisted: boolean;
}

export const LikeCounter = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 5rem;
  background-color: ${({ theme }) => theme.colors.systemTray.bg};
  gap: 1.25rem;
  padding: 2rem 4rem;
  border-radius: ${({ theme }) => theme.borderRadius};

  :before {
    content: '';
    background: ${({ theme }) => theme.gradients.rainbow};
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(22px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: ${({ isLikePersisted }) => (isLikePersisted ? '0.6' : '0')};
    transition: opacity 0.3s ease-in-out;
  }

  @keyframes glowing {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 200% 0;
    }
    100% {
      background-position: 0 0;
    }
  }
`;

export const Digit = styled.h3`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 5rem;
  background-image: linear-gradient(135deg, #5efce8 10%, #736efe 100%);
  color: ${({ theme }) => theme.primary.text};
  padding: ${({ theme }) => theme.space.md};
  width: 7rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  animation: ${likeKeyframe} 0.6s ease-in-out;
`;

export const Message = styled.h2`
  font-size: 2.1rem;
  color: ${({ theme }) => theme.primary.text};
  text-align: center;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 1.2rem;
`;
