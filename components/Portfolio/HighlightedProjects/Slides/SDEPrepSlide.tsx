import React from "react";

const SDEPrepSlide: React.FC = () => (
  <section id="sdeprep-slide" className="sdeprep-animated-bg">
    <style jsx>{`
      .sdeprep-animated-bg {
        min-height: 100vh;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0 0 40px 0;
        background: linear-gradient(-45deg, #444 0%, #1a237e 40%, #444 60%, #1a237e 100%);
        background-size: 200% 200%;
        animation: sdeprep-gradient-move 12s ease-in-out infinite;
      }
      @keyframes sdeprep-gradient-move {
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
      .sdeprep-pill {
        display: inline-block;
        background: #172a45;
        color: #2bff88;
        font-weight: 700;
        border-radius: 999px;
        padding: 6px 18px;
        font-size: 16px;
        margin-right: 10px;
        margin-bottom: 8px;
      }
    `}</style>
    <div style={{
      display: "flex",
      flexDirection: "row-reverse",
      alignItems: "center",
      justifyContent: "flex-start",
      maxWidth: 1200,
      margin: "64px auto 0 auto",
      padding: "80px 24px 0 24px",
      minHeight: "70vh"
    }}>
      {/* Right: Content */}
      <div style={{ flex: 1, maxWidth: 600, marginLeft: 48 }}>
        <h1 style={{ color: "#2bff88", fontWeight: 900, fontSize: 44, letterSpacing: 1, margin: "0 0 16px 0", textAlign: "left", textTransform: "uppercase" }}>SDE_PREP</h1>
        <div style={{ fontSize: 20, color: "#fff", margin: "0 0 32px 0", fontWeight: 400, textAlign: "left", lineHeight: 1.5 }}>
          A comprehensive platform designed to help students prepare for software development engineer interviews through structured MCQ practice sessions.
        </div>
        <div style={{ fontWeight: 700, fontSize: 22, margin: "0 0 12px 0", color: "#fff", textAlign: "left" }}>Key Features</div>
        <ul style={{ fontSize: 18, color: "#fff", margin: "0 0 32px 0", paddingLeft: 24, textAlign: "left", listStyle: "disc" }}>
          <li>🏷️ Institute login system</li>
          <li>🏷️ Chapter-wise test organization</li>
          <li>🏷️ PDF generation for tests</li>
          <li>🏷️ Student dashboard with progress tracking</li>
          <li>🏷️ Mark-wise filtering system</li>
          <li><b><h3> Tech Stack: React, Firebase, MySQL </h3></b></li>
        </ul>
  
      </div>
      {/* Left: Image placeholder */}
      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", minHeight: 340 }}>
        {/* Replace the below with your actual image when ready */}
        <img
          src="/projects/p2.jpeg"
          alt="SDE Prep"
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
        href="https://sde-placement.vercel.app/"
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
        href="https://github.com/Jayom5797/sde-placement"
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

export default SDEPrepSlide;
