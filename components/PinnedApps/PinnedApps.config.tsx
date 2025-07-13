import React, { ReactNode } from 'react';
import VsCode from '../Apps/VsCode/VsCode';
import GoogleSearch from '../Apps/GoogleSearch/GoogleSearch';

export const usePinnedAppsConfig = (): { pinnedApps: IPinnedApp[] } => {
  const pinnedApps: IPinnedApp[] = [
    {
      id: 1,
      text: 'GitHub',
      icon: '/assets/icons/startmenu/github.svg',
      action: () => window.open('https://github.com/Jayom5797', '_blank'),
      iconSize: { height: 40, width: 40 },
      willOpenWindowWith: null,
    },
    {
      id: 2,
      text: 'VSCode',
      icon: '/assets/icons/startmenu/vscode.svg',
      action: null,
      iconSize: { height: 36, width: 36 },
      willOpenWindowWith: <VsCode />,
    },
    {
      id: 3,
      text: 'WebStorm',
      icon: '/assets/icons/startmenu/webstorm.svg',
      action: null,
      iconSize: { height: 36, width: 36 },
      willOpenWindowWith: <VsCode />,
    },
    {
      id: 4,
      text: 'PyCharm',
      icon: '/assets/icons/startmenu/pycharm.svg',
      action: null,
      iconSize: { height: 36, width: 36 },
      willOpenWindowWith: <VsCode />,
    },
    {
      id: 10,
      text: 'Figma',
      icon: '/assets/icons/startmenu/figma.png',
      action: null,
      iconSize: { height: 38, width: 38 },
      willOpenWindowWith: null,
    },
    {
      id: 15,
      text: 'Chrome',
      icon: '/assets/icons/startmenu/chrome.svg',
      action: null,
      iconSize: { height: 40, width: 40 },
      willOpenWindowWith: <GoogleSearch />,
    },
    {
      id: 16,
      text: 'Edge',
      icon: '/assets/icons/startmenu/icons8-microsoft-edge.svg',
      action: null,
      iconSize: { height: 40, width: 40 },
      willOpenWindowWith: <GoogleSearch />,
    },
  ];

  return {
    pinnedApps,
  };
};

interface IPinnedApp {
  id: number;
  text: string;
  icon: string;
  action: (() => void) | null;
  iconSize: { height: number; width: number };
  willOpenWindowWith: ReactNode | null;
}
