import styled from 'styled-components';

export const SecondSlide = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  .columns-row {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: flex-start;
  }

  .left-column {
    width: 50%;
    height: 100%;
    padding: 3rem 2rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 2rem;
  }

  .right-column {
    width: 50%;
    height: 100%;
    padding: 3rem 2rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 2rem;
  }

  .tagline-center {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-top: 0;
  }

  /* Prevent blur on emoji avatars in SectionHeader */
  .page .section-header-emoji {
    font-size: 3.5rem;
    line-height: 1;
    display: inline-block;
    vertical-align: middle;
    filter: none !important;
    transform: none !important;
    image-rendering: auto;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1rem !important;
    line-height: 1.3 !important;
    margin-bottom: 0.75rem;
  }

  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 0.5rem;
  }

  .left-column p:last-child,
  .right-column p:last-child {
    margin-bottom: 0;
  }

  @media ${({ theme }) => theme.media.tablet} {
    h1 {
      font-size: 2rem;
    }

    .columns-row {
      flex-direction: column;
    }
    .left-column, .right-column {
      width: 100%;
      height: auto;
      padding: 1.5rem 1rem;
      margin-top: 1rem;
      align-items: flex-start;
    }
    .tagline-center {
      margin-top: 0;
    }
  }
`;
