import React from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';
import WindowLoaderMobile from './WindowLoaderMobile';

/**
 * Renders all currently opened windows on mobile, driven by redux windows state.
 */
const WindowContentWithLoader = ({ content }: { content: React.ReactNode }) => {
  const [showLoader, setShowLoader] = React.useState(true);
  React.useEffect(() => {
    const t = setTimeout(() => setShowLoader(false), 300);
    return () => clearTimeout(t);
  }, []);

  // Handler to skip loader instantly
  const handleSkipLoader = () => setShowLoader(false);

  return (
    <div style={{ height: 'calc(100% - 48px)', overflowY: 'auto', background: '#222' }}>
      {showLoader ? <WindowLoaderMobile onSkip={handleSkipLoader} /> : content}
    </div>
  );
};

const OpenedWindowsMobile = () => {
  const { openedWindows } = useTypedSelector((state) => state.windows);
  const { closeOpenedWindow } = useActions();

  if (!openedWindows.length) return null;

  return (
    <>
      {openedWindows.map((window) => (
        <div
          key={window.windowName}
          style={{
            position: 'fixed',
            top: '10%',
            left: '7.5%',
            width: '85vw',
            height: '80vh',
            background: '#181818f2',
            borderRadius: 16,
            zIndex: 9999,
            boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
            display: window.isOpen ? 'block' : 'none',
            overflow: 'hidden',
          }}
        >
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0.5rem 1rem',
            background: '#222',
            color: '#fff',
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <img src={window.windowIcon} alt={window.windowName} style={{ width: 28, height: 28, marginRight: 8 }} />
              <span style={{ fontWeight: 600, fontSize: 16 }}>{window.windowName}</span>
            </div>
            <button
              aria-label={`Close ${window.windowName}`}
              style={{ background: 'none', border: 'none', color: '#fff', fontSize: 24, cursor: 'pointer' }}
              onClick={() => closeOpenedWindow(window.windowName)}
            >
              &times;
            </button>
          </div>
          <WindowContentWithLoader content={window.windowContent} />
        </div>
      ))}
    </>
  );
};

export default OpenedWindowsMobile;
