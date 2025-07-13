import React from "react";

const EdupluseSlide: React.FC = () => (
  <section id="edupluse-slide" className="epulse-animated-bg">
    <style jsx>{`
      .epulse-animated-bg {
        min-height: 100vh;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0 0 40px 0;
        background: linear-gradient(-45deg, #444 0%, #1a237e 40%, #444 60%, #1a237e 100%);
        background-size: 200% 200%;
        animation: epulse-gradient-move 12s ease-in-out infinite;
      }
      @keyframes epulse-gradient-move {
        0% {
          background-position: 0% 50%;
        }
        50% {
          background-position: 100% 50%;
        }
        100% {
          background-position: 0% 50%;
        }
      }
    `}</style>

    <div style={{
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-start",
      maxWidth: 1200,
      margin: "64px auto 0 auto", // Push content down from the top
      padding: "80px 24px 0 24px",
      minHeight: "70vh"
    }}>
      {/* Left: Content */}
      <div style={{ flex: 1, maxWidth: 600 }}>
        <h1 style={{ color: "#2bff88", fontWeight: 900, fontSize: 48, letterSpacing: 1, margin: "0 0 16px 0", textAlign: "left" }}>EduPulse</h1>
        <div style={{ fontSize: 20, color: "#fff", margin: "0 0 32px 0", fontWeight: 400, textAlign: "left", lineHeight: 1.5 }}>
          An innovative AI system that monitors<br />
          student attention during online lectures<br />
          using computer vision and machine learning techniques.
        </div>
        <div style={{ fontWeight: 700, fontSize: 22, margin: "0 0 12px 0", color: "#fff", textAlign: "left" }}>Key Features</div>
        <ul style={{ fontSize: 18, color: "#fff", margin: "0 0 32px 0", paddingLeft: 24, textAlign: "left", listStyle: "disc" }}>
          <li>🏷️ Real-time facial recognition</li>
          <li>🏷️ Eye tracking technology</li>
          <li>🏷️ Attention analytics</li>
          <li>🏷️ Teacher dashboard</li>
          <li>🏷️ Student engagement reports</li>
          <li><b><h3> Tech Stack: MediaPipe, Firebase, React </h3></b></li>
        </ul>
        
      </div>
      {/* Right: Image placeholder */}
      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", minHeight: 340 }}>
        {/* Replace the below with your actual image when ready */}
        <img
          src="/projects/p1.jpeg"
          alt="EduPulse"
          style={{
            width: 320,
            height: 320,
            objectFit: "cover",
            borderRadius: 24,
            boxShadow: "0 4px 32px #0005"
          }}
        />
      </div>
    </div>
    {/* Buttons and scroll hint below main row */}
    <div style={{ display: "flex", justifyContent: "center", gap: 32, marginBottom: 32 }}>
      <a
        href="https://edu-pulse-sage.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          background: "#2bff88",
          color: "#181f2a",
          borderRadius: 8,
          padding: "12px 32px",
          fontWeight: 700,
          fontSize: 18,
          textDecoration: "none",
          boxShadow: "0 2px 16px #2bff8822"
        }}
      >
        Live Demo
      </a>
      <a
        href="https://github.com/Jayom5797/EduPulse"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          background: "#0099ff",
          color: "#fff",
          borderRadius: 8,
          padding: "12px 32px",
          fontWeight: 700,
          fontSize: 18,
          textDecoration: "none",
          boxShadow: "0 2px 16px #0099ff22"
        }}
      >
        Source
      </a>
    </div>

  </section>
);

export default EdupluseSlide;
