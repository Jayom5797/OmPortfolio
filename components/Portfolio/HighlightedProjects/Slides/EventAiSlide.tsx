import React from "react";

const EventAiSlide: React.FC = () => (
  <section id="eventai-slide" className="eventai-animated-bg">
    <style jsx>{`
      .eventai-animated-bg {
        min-height: 100vh;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0 0 40px 0;
        background: linear-gradient(-45deg, #444 0%, #1a237e 40%, #444 60%, #1a237e 100%);
        background-size: 200% 200%;
        animation: eventai-gradient-move 12s ease-in-out infinite;
      }
      @keyframes eventai-gradient-move {
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
      .eventai-pill {
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
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-start",
      maxWidth: 1200,
      margin: "64px auto 0 auto",
      padding: "80px 24px 0 24px",
      minHeight: "70vh"
    }}>
      {/* Left: Content */}
      <div style={{ flex: 1, maxWidth: 600 }}>
        <h1 style={{ color: "#2bff88", fontWeight: 900, fontSize: 40, letterSpacing: 1, margin: "0 0 16px 0", textAlign: "left" }}>EventManagement Platform</h1>
        <div style={{ fontSize: 20, color: "#fff", margin: "0 0 32px 0", fontWeight: 400, textAlign: "left", lineHeight: 1.5 }}>
          A responsive frontend application for managing college events, built under tight deadlines with focus on user experience and functionality.
        </div>
        <div style={{ fontWeight: 700, fontSize: 22, margin: "0 0 12px 0", color: "#fff", textAlign: "left" }}>Key Features</div>
        <ul style={{ fontSize: 18, color: "#fff", margin: "0 0 32px 0", paddingLeft: 24, textAlign: "left", listStyle: "disc" }}>
          <li>🏷️ Event creation and management</li>
          <li>🏷️ Responsive design</li>
          <li>🏷️ User-friendly interface</li>
          <li>🏷️ Real-time updates</li>
          <li>🏷️ Mobile-optimized experience</li>
          <li><b><h3> Tech Stack: React, Tailwind CSS </h3></b></li>
        </ul>
      </div>
      {/* Right: Image placeholder */}
      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", minHeight: 340 }}>
        {/* Replace the below with your actual image when ready */}
        <img
          src="/projects/p3.jpeg"
          alt="Event Management"
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
        href="https://github.com/Utsav-Singh-35/FestGenix"
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

export default EventAiSlide;
