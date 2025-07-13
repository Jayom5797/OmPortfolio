import React from 'react';
import * as Styled from './FourthSlide.styles';
import SectionHeader from '../../../Typography/SectionHeader/SectionHeader';
import Slide from '../../../Slide/Slide';
import ProjectHighlights from '../ProjectHighlights';

/**
 *Renders fourth slide in About Portfolio presentation
 *@function SecondSlide
 *@returns {JSX.Element} - Rendered FourthSlide component
 */
const FourthSlide = (): JSX.Element => {
  return (
    <Slide height={'100vh'} anchorID={'fourth-slide'} bgColor={'#000'}>
      <Styled.FourthSlide>
        {/*
        <SectionHeader
          variant={'small'}
          headerText={'Project Highlights'}
          margin={'0'}
          color={'#2bff88'}
        />
        */}
        <ProjectHighlights />
      </Styled.FourthSlide>
    </Slide>
  );
};

export default FourthSlide;
