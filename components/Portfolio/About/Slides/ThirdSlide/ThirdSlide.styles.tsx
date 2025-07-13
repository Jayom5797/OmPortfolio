import styled from 'styled-components';
import {
  slideTop,
} from '../../../../../design-system/reusableCss';

export const ThirdSlide = styled.div`
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  /* Remove static image */
  /* background-image: url('/slide_3_bg.jpg'); */
  /* Add animated gradient */
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

  .skills-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .glass-wrapper {
    display: flex;
    gap: 4rem;
    margin-top: 2rem;
  }

  .icon-skills {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1.2rem;
    align-items: center;
    justify-content: flex-start;
    margin: 1rem 0;
    overflow-x: auto;
  }

  .glass-content {
    z-index: 5;
    display: flex;
    flex-direction: column;
    min-width: 40%;
    padding: 2rem;
    border-radius: ${({ theme }) => theme.borderRadius};
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    animation: ${slideTop} 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

    .tech-skills {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  }

  
  .skills-list {
    display: flex;
    flex-direction: row;
    gap: 3.5rem;
    justify-content: center;
    align-items: flex-start;
  }

  .skills-list-item {
    border: 2px solid rgba(255,255,255,0.25);
    border-radius: 1rem;
    box-shadow: 0 4px 24px 0 rgba(0,0,0,0.10);
    background: rgba(0,0,0,0.10);
    padding: 2rem 1.5rem;
    margin: 0 0.5rem;
    transition: box-shadow 0.2s;
    flex: 1;
    min-width: 350px;
    max-width: 600px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .skills-list-item:nth-child(2) {
    min-width: 350px;
    flex: 1;
    max-width: 600px;
  }

  .skills-list-item:nth-child(2) .tech-skills {
    margin-top: 2.5rem;
    text-align: right;
    align-items: flex-end;
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .skills-list-item:first-child .tech-skills {
    text-align: right;
    align-items: flex-end;
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .skills-list-item .tech-skills {
    margin-top: 3.5rem;
  }

  .icon-skills li img, .icon-skills li svg {
    height: 42px !important;
    width: 42px !important;
  }

  @media (max-width: 900px) {
    .skills-list {
      flex-direction: column;
      gap: 1rem;
    }
  }

  @media ${({ theme }) => theme.media.tablet} {
    .skills-wrapper {
      h1 {
        font-size: 2.5rem;
      }
    }

    .glass-wrapper {
      gap: 1rem;
      flex-direction: column;
      margin-top: 1rem;
      width: 100%;
    }

    .glass-content {
      width: 95%;
      margin: 0 auto;
      padding: 1rem;

      h1 {
        font-size: 1.5rem;
        margin: 0;
      }

      p {
        margin: 0;
      }

      .icon-skills {
        margin: 0;
      }

      .tech-skills {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }
    }
  }
`;
