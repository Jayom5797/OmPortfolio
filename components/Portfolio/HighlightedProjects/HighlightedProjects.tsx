import React from 'react';
import * as Styled from './HighlightedProjects.styles';
import Navbar from '../Navbar/Navbar';
import SectionHeader from '../Typography/SectionHeader/SectionHeader';
import WaveDivider from '../WaveDivider/WaveDivider';

/**
 *Renders sections with some of my projects
 *@function HighlightedProjects
 *@returns {JSX.Element} - Rendered HighlightedProjects component
 */
const HighlightedProjects = (): JSX.Element => {
  return (
    <Styled.Container>
      {/* NAVIGATION */}
      <Navbar isLogoExpanded={true} />
      {/* HERO */}
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
    </Styled.Container>
  );
};

export default HighlightedProjects;
