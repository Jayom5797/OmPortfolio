import React from 'react';

interface WindowLoaderMobileProps {
  onSkip?: () => void;
}

const WindowLoaderMobile: React.FC<WindowLoaderMobileProps> = ({ onSkip }) => (
  <div
    style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'rgba(0,0,0,0.08)',
      color: '#fff',
      fontSize: 20,
      fontWeight: 500,
      letterSpacing: 1,
      cursor: onSkip ? 'pointer' : 'default',
      userSelect: 'none',
    }}
    onClick={onSkip}
    role={onSkip ? 'button' : undefined}
    tabIndex={onSkip ? 0 : undefined}
    aria-label={onSkip ? 'Skip loader' : undefined}
  >
    Loading...
    {onSkip && (
      <span style={{ fontSize: 14, marginTop: 8, color: '#ccc' }}>
        Tap to skip
      </span>
    )}
  </div>
);

export default WindowLoaderMobile;
