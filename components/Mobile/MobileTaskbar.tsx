import React from 'react';
import styles from './MobileTaskbar.module.css';

 const taskbarIcons = [
   { icon: '/assets/icons/taskbar/windows.svg', label: 'Start' },
   { icon: '/assets/icons/taskbar/search.svg', label: 'Search' },
   { icon: '/assets/icons/taskbar/tasks.svg', label: 'Tasks' },
   { icon: '/assets/icons/taskbar/chrome.svg', label: 'Chrome' },
   { icon: '/assets/icons/taskbar/edge.svg', label: 'Edge' },
   { icon: '/assets/icons/taskbar/folder.svg', label: 'Files' },
   { icon: '/assets/icons/taskbar/github.svg', label: 'GitHub' },
   { icon: '/assets/icons/taskbar/terminal.svg', label: 'Terminal' },
   { icon: '/assets/icons/taskbar/weather.svg', label: 'Weather' },
];

const MobileTaskbar = () => {
  // Taskbar icons and clock removed for a clean mobile desktop
  return null;
};

export default MobileTaskbar;
