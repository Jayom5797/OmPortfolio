import styled, { css } from 'styled-components';
import {
  floatingMobileKeyframes,
  floatingWatchKeyframes,
  floatKeyframes,
} from '../../../design-system/reusableCss';

export const Container = styled.section`
  width: 100vw;
  min-height: 100vh;
  box-sizing: border-box;
  max-width: 100%;
  overflow-x: hidden;

  @media (max-width: 768px) {
    min-height: unset;
    height: auto;
    padding: 0 0.5rem;
  }

  @media ${({ theme }) => theme.media.desktop} {
    scroll-snap-type: y mandatory;
    overflow-y: scroll;
    height: 100vh;
    padding: 0 2rem;
  }
`;

export const ProjectsHero = styled.div`
  height: 100vh;
  display: flex;
  position: relative;
  scroll-snap-align: center;
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

  @media ${({ theme }) => theme.media.tablet} {
    flex-direction: column;
  }
`;

export const HeroLeftColumn = styled.div`
  flex: 0.4;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 4rem;

  h1 {
    line-height: 1.1;
  }

  @media ${({ theme }) => theme.media.tablet} {
    flex: 1;
    padding: 1rem 2rem;
    p: {
      font-size: 1.25rem;
    }
  }
`;
export const HeroRightColumn = styled.div`
  flex: 0.6;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    .laptop-wrapper {
      transform: translateY(-4rem) scale(1.25);
    }

    .mobile-wrapper {
      transform: rotate(-5deg) translateX(-4rem) skew(-1deg) scale(1.25);
    }

    .watch-wrapper {
      transform: rotate(2deg) skew(-2deg) translateX(5rem) scale(1.2);
    }
  }

  @media ${({ theme }) => theme.media.tablet} {
    display: none;
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

  .laptop {
    transform: rotate(0deg) skew(0deg) scale(0.9);
  }

  .mobile {
    transform: rotate(5deg) skew(1deg) scale(0.8);
  }

  .watch {
    transform: rotate(-2deg) skew(2deg) scale(0.9);
  }
`;

interface FloatingImgContainerProps {
  variant: 'laptop' | 'phone' | 'watch';
}

const laptopAnimation = css`
  animation: ${floatKeyframes} 6s ease-in-out infinite;
`;
const phoneAnimation = css`
  animation: ${floatingMobileKeyframes} 6s ease-in-out infinite;
`;
const watchAnimation = css`
  animation: ${floatingWatchKeyframes} 6s ease-in-out infinite;
`;

export const FloatingImgContainer = styled.figure<FloatingImgContainerProps>`
  position: relative;
  ${({ variant }) => variant === 'laptop' && laptopAnimation};
  ${({ variant }) => variant === 'phone' && phoneAnimation};
  ${({ variant }) => variant === 'watch' && watchAnimation};
`;
