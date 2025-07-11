import React from 'react';

/**
 *Renders resume component
 *@function Resume
 *@returns {JSX.Element} - Rendered CardContent component
 */
const Resume = (): JSX.Element => {
  return (
    <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#222' }}>
      <iframe
        src="/assets/om-cv.pdf"
        title="Om Singh Resume PDF"
        width="80%"
        height="95%"
        style={{ border: 'none', boxShadow: '0 4px 32px rgba(0,0,0,0.2)', background: 'white' }}
      />
    </div>
  );
};

export default Resume;
