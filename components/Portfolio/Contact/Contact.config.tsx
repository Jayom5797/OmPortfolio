import React, { ReactNode } from 'react';
import { FiGithub, FiInstagram, FiLinkedin, FiTwitter } from 'react-icons/fi';

/**
 * Custom hook to get contact info data
 *@function useContactConfig
 *@returns {IMyContact[]} myContacts - the hook returns array of social contacts with id, icon, text and href of social platform
 */
export const useContactConfig = (): { myContacts: IMyContact[] } => {
  const myContacts: IMyContact[] = [
    {
      id: 1,
      icon: <FiTwitter className={'contact-icon'} />,
      text: 'Twitter',
      href: 'https://twitter.com/vova_ush',
    },
    {
      id: 2,
      icon: <FiGithub className={'contact-icon'} />,
      text: 'GitHub',
      href: 'https://github.com/Jayom5797',
    },
    {
      id: 3,
      icon: <FiLinkedin className={'contact-icon'} />,
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/5797omsingh',
    },
    {
      id: 4,
      icon: <FiInstagram className={'contact-icon'} />,
      text: 'Instagram',
      href: 'https://www.instagram.com/007_thakur_om?igsh=N2s1YnE0eGY4eWxt',
    },
  ];

  return { myContacts };
};

export interface IMyContact {
  id: number;
  icon: ReactNode;
  text: string;
  href: string;
}
