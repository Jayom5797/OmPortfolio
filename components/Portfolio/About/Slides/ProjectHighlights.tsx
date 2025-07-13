import React from "react";

import ProjectCard from "../../ProjectCard";

import { useState } from "react";

const projects = [
  {
    key: "edupulse",
    title: "EDUPULSE",
    image: "/projects/p1.jpeg",
    shortDesc: "AI-powered tool for tracking student focus in online classes.",
    fullDesc: "An innovative AI system that monitors student attention during online lectures using computer vision and machine learning techniques.",
    features: [
      "🧑‍🎓 Real-time facial recognition",
      "🧑‍🎓 Eye tracking technology",
      "🧑‍🎓 Attention analytics",
      "🧑‍🎓 Teacher dashboard",
      "🧑‍🎓 Student engagement reports"
    ],
    techStack: "MediaPipe, Firebase, React",
    repoUrl: "https://github.com/Jayom5797/EduPulse",
    liveUrl: "#"
  },
  {
    key: "sdeprep",
    title: "SDE PREP",
    image: "/projects/p2.jpeg",
    shortDesc: "Practice MCQs and prep for SDE interviews with ease.",
    fullDesc: "A comprehensive platform designed to help students prepare for software development engineer interviews through structured MCQ practice sessions.",
    features: [
      "📝 Institute login system",
      "📝 Chapter-wise test organization",
      "📝 PDF generation for tests"
    ],
    techStack: "Node.js, Express, MongoDB, React",
    repoUrl: "https://github.com/Jayom5797/sde-placement",
    liveUrl: "#"
  },
  {
    key: "stackit",
    title: "STACKIT",
    image: "/projects/p4.jpeg",
    shortDesc: "Simple Q&A platform for collaborative coding help.",
    fullDesc: "A minimal, developer-friendly Q&A platform that enables collaborative learning through structured questions, answers, voting, and tagging.",
    features: [
      "🛠️ Multi-Type Users",
      "🛠️ Dynamic Division of Domain",
      "🛠️ Admin Panel for Control & Management",
      "🛠️ Answer Acceptance and Voting by Users",
      "🛠️ Gamification by assigning points"
    ],
    techStack: "HTML, CSS, Django, SQLite",
    repoUrl: "#",
    liveUrl: "#"
  },
  {
    key: "securevote",
    title: "SECURE VOTE",
    image: "/projects/p5.jpeg",
    shortDesc: "Biometric-secured online voting for maximum trust.",
    fullDesc: "A secure voting platform that uses biometric authentication to ensure that each vote is cast only once and that the results are accurate.",
    features: [
      "🗳️ FingerPrint Authentication",
      "🗳️ No saving of fingerprint data",
      "🗳️ Biometric data converted into 64bit hex",
      "🗳️ Admin Panel for control & management",
      "🗳️ User Panel for tracking upcoming events"
    ],
    techStack: "HTML, CSS, Pandas, Numpy, Arduino, SQLite",
    repoUrl: "#",
    liveUrl: "#"
  },
  {
    key: "eventai",
    title: "EVENT MANAGEMENT PLATFORM",
    image: "/projects/p3.jpeg",
    shortDesc: "Organize and manage events with a user-friendly dashboard.",
    fullDesc: "A responsive frontend application for managing college events, built under tight deadlines with focus on user experience and functionality.",
    features: [
      "📝 Event creation and management",
      "📝 Responsive design",
      "📝 User-friendly interface"
    ],
    techStack: "Python, FastAPI, Vercel",
    repoUrl: "https://github.com/Utsav-Singh-35/FestGenix",
    liveUrl: "#"
  },
  {
    key: "smartcitydb",
    title: "SMART CITY DB",
    image: "/projects/p6.jpeg",
    shortDesc: "Dashboard for real-time smart city analytics.",
    fullDesc: "A smart city dashboard and analytics platform.",
    features: [
      "🏙️ Feature one",
      "🏙️ Feature two",
      "🏙️ Feature three",
      "🏙️ Feature four",
      "🏙️ Feature five"
    ],
    techStack: "React, Node.js, MongoDB, Vercel",
    repoUrl: "#",
    liveUrl: "#"
  }
];

const ProjectHighlights: React.FC = () => {
  const [active, setActive] = useState<string|null>(null);
  return (
    <section className="ph-animated-bg">
      <style jsx>{`
        .ph-animated-bg {
          min-height: 100vh;
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
          background: linear-gradient(-45deg, #444 0%, #1a237e 40%, #444 60%, #1a237e 100%);
          background-size: 200% 200%;
          animation: ph-gradient-move 12s ease-in-out infinite;
          padding: 60px 0 60px 0;
        }
        @keyframes ph-gradient-move {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .ph-title-box {
          display: flex;
          justify-content: center;
          align-items: center;
          background: none;
          margin-top: 36px;
          margin-bottom: 44px;
          font-size: 2.7rem;
          font-weight: 900;
          color: #2bff88;
          letter-spacing: 2px;
          text-transform: uppercase;
          text-align: center;
          box-shadow: none;
        }
        .ph-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 36px;
          max-width: 1320px;
          width: 100%;
          margin: 0 auto 40px auto;
        }
        @media (max-width: 900px) {
          .ph-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 600px) {
          .ph-grid {
            grid-template-columns: 1fr;
          }
        }
        .ph-card {
          background: rgba(30,40,60,0.7);
          border: 1.5px solid #2226;
          border-radius: 24px;
          box-shadow: 0 2px 16px #0003;
          padding: 28px 34px;
          display: flex;
          flex-direction: row;
          align-items: center;
          min-height: 150px;
          min-width: 0;
          transition: box-shadow 0.2s;
          height: 176px;
          max-width: 100%;
        }
        .ph-card img {
          width: 110px;
          height: 110px;
          object-fit: cover;
          border-radius: 16px;
          margin-right: 28px;
          margin-bottom: 0;
          flex-shrink: 0;
          align-self: center;
          background: #222;
        }
        .ph-card h3 {
          color: #2bff88;
          font-weight: 900;
          font-size: 1.18rem;
          margin: 0 0 6px 0;
          text-transform: uppercase;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .ph-card .ph-card-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
          min-width: 0;
          flex: 1;
        }
        .ph-card .ph-card-content div {
          color: #fff;
          font-size: 0.98rem;
          line-height: 1.38;
          white-space: normal;
          overflow-wrap: break-word;
          word-break: break-word;
          overflow: visible;
        }
        .ph-card ul {
          margin: 0 0 10px 0;
          padding-left: 18px;
        }
        .ph-card .ph-tech {
          font-weight: 700;
          color: #2bff88;
          font-size: 1rem;
          margin-bottom: 10px;
        }
      `}</style>
      <div className="ph-title-box">Project Highlights</div>
      <div className="ph-grid" style={{ filter: active ? 'blur(2px) brightness(0.7)' : 'none', pointerEvents: active ? 'none' : 'auto' }}>
        {projects.map(project => (
          <div
            className="ph-card"
            key={project.key}
            onMouseEnter={() => setActive(project.key)}
            onClick={() => setActive(project.key)}
            tabIndex={0}
            style={{ cursor: 'pointer' }}
          >
            <img src={project.image} alt={project.title} />
            <div className="ph-card-content">
              <h3>{project.title}</h3>
              <div>{project.shortDesc}</div>
            </div>
          </div>
        ))}
      </div>
      {active && (
        <div
          className="ph-overlay"
          onClick={() => setActive(null)}
          style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 50, background: 'rgba(20,24,36,0.45)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          <div
            className="ph-pilecard"
            onClick={e => e.stopPropagation()}
            style={{
              background: 'linear-gradient(-45deg, #23293e 0%, #1a237e 40%, #23293e 60%, #1a237e 100%)',
              borderRadius: 32,
              boxShadow: '0 8px 48px #0007',
              padding: '40px 48px',
              minWidth: 370,
              maxWidth: 520,
              width: '94vw',
              color: '#fff',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              animation: 'ph-fadein 0.18s',
              position: 'relative'
            }}
          >
            <img
              src={projects.find(p => p.key === active)?.image}
              alt={projects.find(p => p.key === active)?.title}
              style={{ width: 320, height: 180, borderRadius: 20, objectFit: 'cover', marginBottom: 24 }}
            />
            <h2 style={{ color: '#2bff88', fontWeight: 900, fontSize: 32, textTransform: 'uppercase', margin: '0 0 18px 0', textAlign: 'center', letterSpacing: 1 }}>{projects.find(p => p.key === active)?.title}</h2>
            <div style={{ fontSize: 18, marginBottom: 16, textAlign: 'center', color: '#fff' }}>{projects.find(p => p.key === active)?.fullDesc}</div>
            <ul style={{ margin: 0, padding: 0, marginBottom: 18, listStyle: 'none', textAlign: 'left', width: '100%' }}>
              {projects.find(p => p.key === active)?.features.map((f, i) => (
                <li key={i} style={{ marginBottom: 6, fontSize: 16 }}>{f}</li>
              ))}
            </ul>
            <div style={{ fontWeight: 700, color: '#2bff88', fontSize: 17, marginBottom: 12, textAlign: 'center' }}>
              Tech Stack: {projects.find(p => p.key === active)?.techStack}
            </div>
            <div style={{ display: 'flex', gap: 24, justifyContent: 'center', marginTop: 10 }}>
              <a
                href={projects.find(p => p.key === active)?.repoUrl || '#'}
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: 22, textDecoration: 'none', cursor: 'pointer', transition: 'transform 0.15s', color: '#fff' }}
                title="View on GitHub"
              >
                💻
              </a>
              <a
                href={projects.find(p => p.key === active)?.liveUrl || '#'}
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: 22, textDecoration: 'none', cursor: 'pointer', transition: 'transform 0.15s', color: '#2bff88' }}
                title="View Live Page"
              >
                🌐
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectHighlights;
