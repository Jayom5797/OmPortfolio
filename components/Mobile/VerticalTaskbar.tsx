import React from 'react';
import styles from './VerticalTaskbar.module.css';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';

import { useTaskbarApps } from './TaskbarAppsMobile.config';

const VerticalTaskbar = () => {
  const { changeTheme, openWindow } = useActions();
  const { theme } = useTypedSelector((state) => state.ui);
  const taskbarApps = useTaskbarApps();
  return (
    <div className={styles.verticalTaskbar}>
      <img
        src={theme === 'dark' ? '/assets/icons/taskbar/search-dark.svg' : '/assets/icons/taskbar/search-light.svg'}
        alt="Search"
        title="Search"
        style={{ width: 32, height: 32 }}
      />
      {taskbarApps.map((app, i) => (
        <div
          key={i}
          tabIndex={0}
          role="button"
          aria-label={`Open ${app.name}`}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 40, margin: '8px 0', cursor: 'pointer' }}
          onClick={() => {
            if (typeof app.action === 'function') {
              app.action();
            } else if (typeof app.willOpenWindowWith !== 'undefined' && app.willOpenWindowWith) {
              openWindow({
                windowName: app.name,
                windowContent: app.willOpenWindowWith,
                windowIcon: app.icon,
                isOpen: true,
                size: {
                  width: 0.85 * window.innerWidth,
                  height: 0.8 * window.innerHeight,
                },
              });
            }
          }}
          onKeyPress={e => {
            if ((e.key === 'Enter' || e.key === ' ') && (typeof app.action === 'function' || (typeof app.willOpenWindowWith !== 'undefined' && app.willOpenWindowWith))) {
              if (typeof app.action === 'function') {
                app.action();
              } else if (typeof app.willOpenWindowWith !== 'undefined' && app.willOpenWindowWith) {
                openWindow({
                  windowName: app.name,
                  windowContent: app.willOpenWindowWith,
                  windowIcon: app.icon,
                  isOpen: true,
                  size: {
                    width: 0.85 * window.innerWidth,
                    height: 0.8 * window.innerHeight,
                  },
                });
              }
            }
          }}
        >
          <img src={app.icon} alt={app.name} style={{ width: 32, height: 32 }} />
        </div>
      ))}
      <img
        src={theme === 'dark' ? '/assets/icons/taskbar/day.png' : '/assets/icons/taskbar/night.png'}
        alt="Light/Dark"
        title="Light/Dark"
        onClick={changeTheme}
        style={{ cursor: 'pointer', width: 32, height: 32 }}
      />
    </div>
  );
};

export default VerticalTaskbar;
