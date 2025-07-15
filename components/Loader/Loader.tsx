import React, { useEffect, useState } from 'react';
import * as Styled from './Loader.styles';
import Logo from '../Portfolio/Logo/Logo';

export interface Props {
  isOnScreen: boolean;
  loadingDuration: number;
}

/**
 *Renders main loading component
 *@function Loader
 *@param {boolean} isOnScreen - specifies whether element is on screen
 *@param {number} loadingDuration - duration of dummy loading in milliseconds, based on this duration, un-mounting animation will be toggled after duration - 500ms
 *@returns {JSX.Element} - Rendered CardContent component
 */
const Loader = ({ isOnScreen, loadingDuration }: Props): JSX.Element => {
  // Mobile tap-to-skip logic
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 900;
  const handleTapToSkip = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (isMobile && typeof window !== 'undefined') {
      // Simulate the same effect as key-to-skip: dispatch event or call skip logic
      const skipEvent = new Event('skipLoader');
      window.dispatchEvent(skipEvent);
    }
  };

  useEffect(() => {
    if (!isMobile) return;
    // Listen for the custom skip event
    const skipListener = () => {
      // If parent listens for isOnScreen, it should respond to this event
      // Otherwise, reload or hide loader
      // This is a placeholder; actual skip logic is in parent
    };
    window.addEventListener('skipLoader', skipListener);
    return () => window.removeEventListener('skipLoader', skipListener);
  }, [isMobile]);

  return (
    <Styled.Container
      isOnScreen={isOnScreen}
      loadingDuration={loadingDuration}
      onClick={isMobile ? handleTapToSkip : undefined}
      style={isMobile ? { cursor: 'pointer', userSelect: 'none' } : {}}
      role={isMobile ? 'button' : undefined}
      tabIndex={isMobile ? 0 : undefined}
      aria-label={isMobile ? 'Tap to skip loader' : undefined}
    >
      <Logo isExpanded={isOnScreen} />
      <Styled.TextContainer>
        <Styled.ScrollText>
          JavaScript <br />
          TypeScript <br />
          React <br />
          Next.js <br />
          Node.js <br />
          Om Singh 🕉️
        </Styled.ScrollText>
        {isMobile && (
          <div style={{ color: '#aaa', fontSize: 14, marginTop: 16, textAlign: 'center' }}>
            Tap to skip
          </div>
        )}
      </Styled.TextContainer>
    </Styled.Container>
  );
};

export default Loader;
