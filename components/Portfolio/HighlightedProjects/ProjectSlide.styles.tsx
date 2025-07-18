import styled from 'styled-components';

export const SlideContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  max-width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 0;
  background: linear-gradient(-45deg, #444 0%, #1a237e 40%, #444 60%, #1a237e 100%);
  background-size: 200% 200%;
  animation: gradientMove 30s ease infinite;

  @media (max-width: 768px) {
    padding: 1.5rem 0.5rem;
    min-height: unset;
    width: 100vw;
    font-size: 0.98rem;
  }

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
`;
