import React from 'react';
import * as Styled from './HighlightedProjects.styles';
import Navbar from '../Navbar/Navbar';
import SectionHeader from '../Typography/SectionHeader/SectionHeader';
import WaveDivider from '../WaveDivider/WaveDivider';
import { projects } from '../../../data/projects';
import EdupluseSlide from './Slides/EdupluseSlide';
import SDEPrepSlide from './Slides/SDEPrepSlide';
import StackitSlide from './Slides/StackitSlide';
import SecureVoteSlide from './Slides/SecureVoteSlide';
import EventAiSlide from './Slides/EventAiSlide';
import SmartCityDBSlide from './Slides/SmartCityDBSlide';
import Slide from '../Slide/Slide';

/**
 *Renders sections with some of my projects
 *@function HighlightedProjects
 *@returns {JSX.Element} - Rendered HighlightedProjects component
 */
const HighlightedProjects = (): JSX.Element => {
  return (
    <>
      {/* NAVIGATION */}
      <Navbar isLogoExpanded={true} />
      {/* HERO (First Slide) */}
      <Slide
        bgColor={"linear-gradient(-45deg, #444 0%, #1a237e 40%, #444 60%, #1a237e 100%)"}
        height="100vh"
        anchorID="projects-hero"
      >
        <Styled.ProjectsHero>
          <Styled.HeroLeftColumn style={{ width: '100%', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
            <div style={{ whiteSpace: 'nowrap' }}>
              <SectionHeader
                variant={'small'}
                headerText={'A Walk Through The Journey of My Projects'}
                margin={'0'}
                color={'#2bff88'}
              />
            </div>
          </Styled.HeroLeftColumn>
        </Styled.ProjectsHero>
        <WaveDivider
          waveImg={'/assets/portfolio/blob-1.svg'}
          dividerHeight={'200px'}
        />
      </Slide>
      {/* PROJECT SLIDES: Each project gets its own slide */}
      <EdupluseSlide />
      <SDEPrepSlide />
      <StackitSlide />
      <SecureVoteSlide />
      <EventAiSlide />
      <SmartCityDBSlide />
    </>
  );
};

export default HighlightedProjects;
