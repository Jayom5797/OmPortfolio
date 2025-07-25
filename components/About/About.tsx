import React from 'react';
import * as Styled from './About.styles';
import Paragraph from '../Typography/Paragraph/Paragraph';
import WithSparkles from '../Portfolio/WithSparkles/WithSparkles';
import Image from 'next/image';

/**
 *Renders content for "about" window with basic info about OS
 *@function About
 *@returns {JSX.Element} - Rendered About component
 */
const About = (): JSX.Element => {
  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.Figure>
          <Image
            src="/assets/portfolio/skills/linux-original.svg"
            height={100}
            width={100}
            objectFit={'contain'}
            alt={'Linux is the best OS'}
          />
          <Styled.Figcaption>
            <WithSparkles color={'rgb(255,215,0)'}>
              <h1>Windows 11</h1>
            </WithSparkles>
          </Styled.Figcaption>
        </Styled.Figure>
      </Styled.Header>
      <Styled.InfoWrapper>
        <Paragraph margin={'1rem 0'}>Next.js Windows OS</Paragraph>
        <Paragraph margin={'1rem 0'}>
          Built by Om Singh ©2025 Open for collabs
        </Paragraph>
        <Paragraph margin={'2rem 0'}>
        This Web Operating System emulation and its user interface are intended for portfolio demonstration purposes only and are protected by applicable intellectual property rights.
        </Paragraph>

        <Paragraph margin={'2rem 0'}>
          This product is licensed with
          <Styled.A href={'https://github.com/Jayom5797'} target="_blank" rel="noopener">
            Creative Commons
          </Styled.A>
        </Paragraph>
        <Paragraph margin={'1rem 0'}>
          Feel free to contact
          <WithSparkles color={'rgb(255,215,0)'}>
            <Styled.A href="mailto:jayom5797@gmail.com">
              jayom5797@gmail.com
            </Styled.A>
          </WithSparkles>
        </Paragraph>
      </Styled.InfoWrapper>
    </Styled.Container>
  );
};

export default About;
