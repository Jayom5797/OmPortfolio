import React from "react";
import "./Desktop.css";

const icons = [
  { icon: "/assets/icons/figma.png", label: "Figma" },
  { icon: "/assets/icons/power-point.png", label: "Projects" },
  { icon: "/assets/icons/vscode.svg", label: "VSCode" },
  { icon: "/assets/icons/recycle-bin-empty.png", label: "Trash" },
  { icon: "/assets/icons/user-folder.png", label: "Om" },
  { icon: "/assets/icons/comment.png", label: "Comment" },
  { icon: "/assets/icons/like.png", label: "Likes" },
  { icon: "/assets/icons/acknowledgment.png", label: "Acknowledgments" },
  { icon: "/assets/icons/react.svg", label: "Portfolio" },
  { icon: "/assets/icons/comments.png", label: "Comments" },
  { icon: "/assets/icons/word.png", label: "Resume" },
];

const Desktop: React.FC = () => {
  return (
    <div className="desktop-root">
      <div className="desktop-icons">
        {icons.map((icon, idx) => (
          <div className="desktop-icon" key={idx}>
            <img src={icon.icon} alt={icon.label} />
            <span>{icon.label}</span>
          </div>
        ))}
      </div>
      <div className="desktop-wallpaper">
        <img src="/assets/portfolio/om-logo.png" alt="Om Singh Logo" />
        <div className="desktop-wallpaper-text">Om Singh</div>
      </div>
    </div>
  );
};

export default Desktop; 