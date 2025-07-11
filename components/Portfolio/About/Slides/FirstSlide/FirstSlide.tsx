import React from 'react';
import SectionHeader from '../../../Typography/SectionHeader/SectionHeader';
import PortfolioParagraph from '../../../Typography/PortfolioParagraph/PortfolioParagraph';
import ScrollHint from '../../../ScrollHint/ScrollHint';
import * as Styled from './FirstSlide.styles';
import Slide from '../../../Slide/Slide';
import WithSparkles from '../../../WithSparkles/WithSparkles';

/**
 *Renders first slide in About Portfolio presentation
 *@function FirstSlide
 *@returns {JSX.Element} - Rendered CardContent component
 */
const FirstSlide = (): JSX.Element => {
  return (
    <Slide bgColor={'#010606'} height={`100vh`} anchorID={'first-slide'}>
      <Styled.FirstSlide id={'first-slide'} className="page first-page">
        <SectionHeader
          variant={'medium'}
          headerText={'Passionate Tech Enthusiast'}
          margin={'0'}
          color={'#2bff88'}
        />

        <PortfolioParagraph
          margin={'1rem 0'}
          withDarkColor={false}
          variant={'large'}
          withAnimatedPresence={true}
        >
         I love turning ideas into simple, elegantly <WithSparkles color={'yellow'}>engineered products.</WithSparkles>
        </PortfolioParagraph>

        <ScrollHint />
      </Styled.FirstSlide>
    </Slide>
  );
};

export default FirstSlide;
