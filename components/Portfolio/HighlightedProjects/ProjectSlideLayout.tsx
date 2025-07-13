import React from 'react';
import SectionHeader from '../Typography/SectionHeader/SectionHeader';
import PortfolioParagraph from '../Typography/PortfolioParagraph/PortfolioParagraph';
import ScrollHint from '../ScrollHint/ScrollHint';
import Slide from '../Slide/Slide';
import styled from 'styled-components';

const SlideContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  padding: 2rem;
  height: 100vh;
`;

interface ProjectSlideLayoutProps {
  anchorID: string;
  bgColor?: string;
  title: string;
  description: string;
  techStack: string;
  liveUrl?: string;
  repoUrl?: string;
  image?: React.ReactNode;
}

const ProjectSlideLayout: React.FC<ProjectSlideLayoutProps> = ({
  anchorID,
  bgColor = 'linear-gradient(-45deg, #444 0%, #1a237e 40%, #444 60%, #1a237e 100%)',
  title,
  description,
  techStack,
  liveUrl,
  repoUrl,
  image,
}) => (
  <Slide bgColor={bgColor} height="100vh" anchorID={anchorID}>
    <SlideContent>
      {image && <div style={{ marginBottom: '2rem' }}>{image}</div>}
      <SectionHeader
        variant={'medium'}
        headerText={title}
        margin={'0'}
        color={'#2bff88'}
      />
      <PortfolioParagraph
        margin={'1rem 0'}
        withDarkColor={false}
        variant={'large'}
        withAnimatedPresence={true}
      >
        {description}
      </PortfolioParagraph>
      <PortfolioParagraph margin={'0.5rem 0'} withDarkColor={false} variant={'small'}>
        <b>Tech Stack:</b> {techStack}
      </PortfolioParagraph>
      <div style={{ margin: '1rem 0', display: 'flex', gap: '2rem' }}>
        {liveUrl && (
          <a href={liveUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#2bff88', fontWeight: 600 }}>
            Live Demo
          </a>
        )}
        {repoUrl && (
          <a href={repoUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#2bff88', fontWeight: 600 }}>
            Source
          </a>
        )}
      </div>
      <ScrollHint />
    </SlideContent>
  </Slide>
);

export default ProjectSlideLayout;
