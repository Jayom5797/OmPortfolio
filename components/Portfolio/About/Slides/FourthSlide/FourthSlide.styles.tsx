import styled, { css } from 'styled-components';
import {
  floatingMobileKeyframes,
  floatKeyframes,
  slideTop,
} from '../../../../../design-system/reusableCss';

export const FourthSlide = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(-45deg, #444 0%, #1a237e 40%, #444 60%, #1a237e 100%);
  background-size: 200% 200%;
  animation: gradientMove 30s ease infinite;

  @keyframes gradientMove {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  .left-column {
    flex: 0.5;
    padding: 3rem 2rem 3rem 10rem;

    h1 {
      line-height: 1;
      margin-bottom: 2rem;
    }
  }

  .right-column {
    flex: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    animation: ${slideTop} 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

    .person-wrapper {
    }

    .react-wrapper {
      transform: rotate(-5deg) translateX(-4rem) skew(-1deg) scale(1.25);
    }

    :hover {
      .person-wrapper {
        transform: scale(1.01) translateX(2rem) rotate(3deg);
      }

      .react-wrapper {
        transform: translateX(-8rem) scale(1.2);
      }

      .redux-wrapper {
        transform: rotate(-5deg) translateY(-6rem) translateX(-4rem) skew(-1deg)
          scale(1.25);
      }

      .node-wrapper {
        transform: rotate(12deg) skew(-2deg) translateX(5rem) translateY(-6rem)
          scale(1.25);
      }
    }
  }

  @media ${({ theme }) => theme.media.tablet} {
    flex-direction: column;
    .left-column {
      width: 100%;
      height: 100%;
      max-width: 100%;
      min-width: unset;
      padding: 1.2rem 0.7rem;
      box-sizing: border-box;
      word-break: break-word;

      h1 {
        font-size: 2rem;
        line-height: 1;
        margin-bottom: 1rem;
        word-break: break-word;
      }
    }

    .right-column {
      display: none;
    }
  }

  @media (max-width: 600px) {
    .left-column {
      width: 100%;
      max-width: 100%;
      min-width: unset;
      padding: 0.5rem !important;
      box-sizing: border-box;
      font-size: 0.93rem;
      word-break: break-word;
    }
    .left-column h1 {
      font-size: 1.1rem;
      margin-bottom: 0.5rem;
      word-break: break-word;
    }
  }
`;

interface ImgContainerProps {
  position: { top?: string; bottom?: string; right?: string; left?: string };
}

export const ImageContainer = styled.div<ImgContainerProps>`
  top: ${({ position }) => position.top};
  bottom: ${({ position }) => position.bottom};
  right: ${({ position }) => position.right};
  left: ${({ position }) => position.left};
  position: absolute;
  transition: all 0.5s ease-in-out;

  .person {
    transform: rotate(0deg) skew(0deg) scale(1);
  }

  .react {
    transform: rotate(5deg) skew(0deg) scale(0.8);
  }

  .redux {
    transform: rotate(3deg) skew(0deg) scale(0.8);
  }

  .node {
    transform: rotate(-12deg) skew(2deg) scale(0.95);
  }
`;

interface FloatingImgContainerProps {
  variant: 'person' | 'tech';
}

const personAnimation = css`
  animation: ${floatKeyframes} 6s ease-in-out infinite;
`;
const reactAnimation = css`
  animation: ${floatingMobileKeyframes} 6s ease-in-out infinite;
`;

export const FloatingImgContainer = styled.figure<FloatingImgContainerProps>`
  position: relative;
  ${({ variant }) => variant === 'person' && personAnimation};
  ${({ variant }) => variant === 'tech' && reactAnimation};
`;
