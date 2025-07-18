import styled from 'styled-components';

//https://stackoverflow.com/questions/53416348/css-scroll-snapping-vertical-not-working
//scrollbar snap

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  box-sizing: border-box;
  padding: 0 1rem;

  @media (max-width: 768px) {
    padding: 0 0.5rem;
    min-height: unset;
    height: auto;
    overflow-y: visible;
  }

  @media ${({ theme }) => theme.media.desktop} {
    /* Scroll snapping only on desktop screens */
    scroll-snap-type: y mandatory;
    overflow-y: scroll;
    scroll-behavior: smooth;
    height: 100vh;
    padding: 0 2rem;
  }
`;
