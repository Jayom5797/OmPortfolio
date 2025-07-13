import React from 'react';
import * as Styled from './TechWidget.styles';
import Image from 'next/image';
import TextHeader from '../Typography/Header/TextHeader';
import Paragraph from '../Typography/Paragraph/Paragraph';

/**
 *Renders tech widget with appreciations to React and Next.js teams
 *@function TechWidget
 *@returns {JSX.Element} - Rendered TechWidget component
 */
const TechWidget = (): JSX.Element => {
  return (
    <Styled.Container>
      <Styled.ReactFigure>
        <Image
          src={'/assets/portfolio/skills/react-original.svg'}
          height={60}
          width={60}
          objectFit={'contain'}
          alt={'Build with React'}
        />
      </Styled.ReactFigure>
      <Styled.TextWrapper>
        <TextHeader margin={'0 0 0.5rem 0'} isBold>
          Powered by
        </TextHeader>
        <Paragraph margin={'0 0 0.5rem 0'}>
          Build with React
        </Paragraph>
        <Paragraph margin={'0 0 0.5rem 0'}>
          🔥 Powered by Next.js and React
        </Paragraph>
        <Paragraph margin={'0'}>
          🇨🇦 Handcrafted by Om Singh
        </Paragraph>
      </Styled.TextWrapper>
    </Styled.Container>
  );
};

export default TechWidget;
