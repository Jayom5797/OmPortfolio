import React from 'react';
import * as Styled from './SecondSlide.styles';
import SectionHeader from '../../../Typography/SectionHeader/SectionHeader';
import PortfolioParagraph from '../../../Typography/PortfolioParagraph/PortfolioParagraph';
import Slide from '../../../Slide/Slide';

/**
 *Renders second slide in About Portfolio presentation
 *@function SecondSlide
 *@returns {JSX.Element} - Rendered SecondSlide component
 */
const SecondSlide = (): JSX.Element => {
  return (
    <Slide bgColor={'#4831d4'} height={'100vh'} anchorID={'second-slide'}>
      <Styled.SecondSlide className="page second-page">
        <div className="columns-row">
          <div className="left-column">
            <SectionHeader
              variant={'medium'}
              margin={'0'}
              color={'#2bff88'}
            >
              <span className="section-header-emoji">🎨</span> Design
            </SectionHeader>

            <PortfolioParagraph
              margin={'0'}
              withDarkColor={false}
              variant={'large'}
              withAnimatedPresence={true}
            >
              💫 I&apos;m a boundary-breaking creator driven by curiosity and clarity of vision. I don&apos;t just build interfaces—I design systems, experiences, and impact. Whether it&apos;s the front-end of a web app or the functional surface of a machine, I shape form and function with equal intensity.<br/><br/>
              🚀 I specialize in crafting intuitive, human-centered solutions using the modern JavaScript stack and design systems, all while leveraging AI-powered tools to iterate faster, prototype smarter, and push creative boundaries further than ever before.
            </PortfolioParagraph>
          </div>
          <div className="right-column">
            <SectionHeader
              variant={'medium'}
              margin={'0'}
              color={'#2bff88'}
            >
              <span className="section-header-emoji">🛠️</span> Engineering
            </SectionHeader>
            <PortfolioParagraph
              margin={'0'}
              withDarkColor={false}
              variant={'large'}
              withAnimatedPresence={true}
            >
              🧠 I am a 360° engineer—unconfined by domain, unlimited by convention. My work spans mechanical systems, electronics, embedded tech, software engineering, and now, the intelligent use of AI platforms to boost efficiency and innovation across the board.<br/><br/>
              ⚙️ Whether it&apos;s designing a robotic arm, developing smart combat systems, automating workflows, or building full-stack platforms—I bring together disciplines, tools, and technologies to create solutions that are both deep and dynamic.<br/><br/>
              🔩 I speak the languages of machines, circuits, code, and control—and I let AI handle the repetitive so I can focus on the remarkable. Because true engineering isn&apos;t just about tools—it&apos;s about transforming limitations into opportunity.
            </PortfolioParagraph>
          </div>
        </div>
        {/* Tagline section centered below both columns */}
        <div className="tagline-center">
          <SectionHeader
            variant={'medium'}
            margin={'2rem 0 0 0'}
            color={'#2bff88'}
          >
            <span className="section-header-emoji">🧭</span> Tagline
          </SectionHeader>
          <PortfolioParagraph
            margin={'0'}
            withDarkColor={false}
            variant={'large'}
            withAnimatedPresence={true}
          >
            &quot;Built by code! powered by gears!! accelerated by AI! &amp; driven by my vision!!&quot;
          </PortfolioParagraph>
        </div>
      </Styled.SecondSlide>
    </Slide>
  );
};

export default SecondSlide;
