import React from 'react';
import AppCenter from '../AppCenter/AppCenter';
import WidgetsModalContent from '../WidgetsModalContent/WidgetsModalContent';
import GoogleSearch from '../Apps/GoogleSearch/GoogleSearch';
import Terminal from '../Apps/Terminal/Terminal';
import About from '../About/About';

export const taskbarApps = [
  {
    name: 'Start',
    icon: '/assets/icons/taskbar/windows.png',
    action: undefined,
    willOpenWindowWith: <AppCenter />,
  },
  {
    name: 'Widget',
    icon: '/assets/icons/taskbar/Widgets.png',
    action: undefined,
    willOpenWindowWith: <WidgetsModalContent />,
  },
  {
    name: 'Chrome',
    icon: '/assets/icons/taskbar/chrome.svg',
    action: undefined,
    willOpenWindowWith: <GoogleSearch />,
  },
  {
    name: 'Edge',
    icon: '/assets/icons/taskbar/edge.svg',
    action: undefined,
    willOpenWindowWith: <GoogleSearch />,
  },
  {
    name: 'File Explorer',
    icon: '/assets/icons/taskbar/file_explorer.webp',
    action: undefined,
    willOpenWindowWith: <About />,
  },
  {
    name: 'GitHub',
    icon: '/assets/icons/taskbar/github.svg',
    action: () => window.open('https://github.com/Jayom5797', '_blank'),
    willOpenWindowWith: undefined,
  },
  {
    name: 'Terminal',
    icon: '/assets/icons/taskbar/bash.png',
    action: undefined,
    willOpenWindowWith: <Terminal />,
  },
];

export function useTaskbarApps() {
  // In future, can add logic for filtering or dynamic apps
  return taskbarApps;
}
