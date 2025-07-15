import React from 'react';
import styles from './DesktopMobile.module.css';
import VerticalTaskbar from './VerticalTaskbar';
import SlidingModal from '../SlidingModal/SlidingModal';
import SettingsModalContent from '../SettingsModalContent/SettingsModalContent';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import CalendarWidget from '../Calendar/Calendar';
import OpenedWindowsMobile from './OpenedWindowsMobile';

import { useMobileApps } from './appsMobile.config';


const taskbarIcons = [
   '/assets/icons/taskbar/windows.svg',
   '/assets/icons/taskbar/search.svg',
   '/assets/icons/taskbar/tasks.svg',
   '/assets/icons/taskbar/chrome.svg',
   '/assets/icons/taskbar/edge.svg',
   '/assets/icons/taskbar/folder.svg',
   '/assets/icons/taskbar/github.svg',
   '/assets/icons/taskbar/terminal.svg',
   '/assets/icons/taskbar/weather.svg',
 ];

const DesktopMobile = () => {
  const apps = useMobileApps();
  // Get current time and date
  const now = new Date();
  const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const date = now.toLocaleDateString();

  const { toggleSettingsModal, openCalendarModal, openWindow } = useActions();
  const { areSettingsOpen, isCalendarOpen, theme } = useTypedSelector((state) => state.ui);

  // Choose wallpaper based on theme
  const wallpaper = theme === 'dark'
    ? '/assets/wallpapers/moblight.jpeg'
    : '/assets/wallpapers/mobdark.jpeg';

  const bgColor = theme === 'dark' ? '#000' : '#fff';

  return (
    <div className={styles.container} style={{
      backgroundColor: bgColor,
      backgroundImage: `url(${wallpaper})`,
      backgroundSize: '90%',
      backgroundPosition: 'left',
      backgroundRepeat: 'no-repeat',
    }}>
      <div className={styles.leftPane}>

        {/* Tray/clock section at the top */}
        <div className={styles.trayBar}>
          <div className={styles.trayIcons}>
            <img
              src={theme === 'light' ? "/assets/icons/taskbar/battery-dark.svg" : "/assets/icons/taskbar/battery.svg"}
              alt="display"
              onClick={toggleSettingsModal}
              style={{ cursor: 'pointer' }}
              tabIndex={0}
              role="button"
              aria-label="Open Settings"
              onKeyPress={e => (e.key === 'Enter' || e.key === ' ') && toggleSettingsModal()}
            />
            <img
              src={theme === 'light' ? "/assets/icons/taskbar/wifi-dark.svg" : "/assets/icons/taskbar/wifi.svg"}
              alt="wifi"
              onClick={toggleSettingsModal}
              style={{ cursor: 'pointer' }}
              tabIndex={0}
              role="button"
              aria-label="Open Settings"
              onKeyPress={e => (e.key === 'Enter' || e.key === ' ') && toggleSettingsModal()}
            />
            <img
              src={theme === 'light' ? "/assets/icons/taskbar/sound-dark.svg" : "/assets/icons/taskbar/sound.svg"}
              alt="sound"
              onClick={toggleSettingsModal}
              style={{ cursor: 'pointer' }}
              tabIndex={0}
              role="button"
              aria-label="Open Settings"
              onKeyPress={e => (e.key === 'Enter' || e.key === ' ') && toggleSettingsModal()}
            />
          </div>
          <div className={styles.clockBar} onClick={openCalendarModal} style={{cursor:'pointer', display:'flex', alignItems:'center'}} tabIndex={0} role="button" aria-label="Open Calendar" onKeyPress={e => (e.key === 'Enter' || e.key === ' ') && openCalendarModal()}>
            <span>{date}</span>
            <span style={{marginLeft: '0.5rem'}}>{time}</span>
          </div>
        </div>
        <div className={styles.appGrid}>
          {apps.map((app, i) => (
            <div
              key={i}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 56, cursor: 'pointer' }}
              tabIndex={0}
              role="button"
              aria-label={`Open ${app.name}`}
              onClick={() => {
                if (app.action) {
                  app.action();
                } else if (app.willOpenWindowWith) {
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
                if (e.key === 'Enter' || e.key === ' ') {
                  if (app.action) {
                    app.action();
                  } else if (app.willOpenWindowWith) {
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
              <img src={app.icon} alt={app.name} style={{ width: 40, height: 40 }} />
              <span style={{
                fontSize: '0.88rem',
                color: theme === 'dark' ? '#e9e9e9' : '#222',
                marginTop: 2,
                textAlign: 'center',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                width: '100%'
              }}>{app.name}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Vertical taskbar on the right */}
      <VerticalTaskbar />
      {/* All opened windows are rendered here, including app windows, with smooth animation and instant launch. */}
      {/* Settings Modal */}
      {areSettingsOpen && (
        <SlidingModal
          variant="settingsModal"
          width="90vw"
          position={{ top: '0', right: '0' }}
        >
          <SettingsModalContent />
        </SlidingModal>
      )}
      {/* Calendar Modal */}
      {isCalendarOpen && (
        <SlidingModal
          variant="calendarModal"
          width="90vw"
          position={{ top: '70px', right: '0' }}
        >
          <CalendarWidget />
        </SlidingModal>
      )}
      <OpenedWindowsMobile />
    </div>
  );
};

export default DesktopMobile;
