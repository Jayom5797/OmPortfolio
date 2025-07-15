import React from 'react';
import { useRouter } from 'next/router';
import VsCode from '../Apps/VsCode/VsCode';
import Likes from '../Likes/Likes';
import Resume from '../Portfolio/Resume/Resume';
import TrashBin from '../Folders/TrashBin/TrashBin';
import CommentsForm from '../CommentsForm/CommentsForm';
import PortfolioLanding from '../Portfolio/PortfolioLanding/PortfolioLanding';
import PortfolioLayout from '../Portfolio/PortfolioLayout/PortfolioLayout';
import Acknowledgments from '../Acknowledgments/Acknowledgments';
import CommentsList from '../CommentsList/CommentsList';

export interface IMobileApp {
  name: string;
  icon: string;
  action?: (() => void) | null;
  willOpenWindowWith?: React.ReactNode | null;
}

export const useMobileApps = () => {
  const router = useRouter();
  return [
    {
      name: 'Figma',
      icon: '/assets/icons/startmenu/figma.png',
      action: null,
      willOpenWindowWith: null,
    },
    {
      name: 'VSCode',
      icon: '/assets/icons/startmenu/vscode.svg',
      action: null,
      willOpenWindowWith: <VsCode />,
    },
    {
      name: 'Om',
      icon: '/assets/icons/Desktop/user-folder.png',
      action: null,
      willOpenWindowWith: (
        <PortfolioLayout title={'Om Singh | Full-Stack Web Developer'}>
          <PortfolioLanding />
        </PortfolioLayout>
      ),
    },
    {
      name: 'Likes',
      icon: '/assets/icons/Desktop/like.png',
      action: null,
      willOpenWindowWith: <Likes />,
    },
    {
      name: 'Portfolio',
      icon: '/assets/portfolio/skills/react-original.svg',
      action: () => router.push('/portfolio'),
      willOpenWindowWith: null,
    },
    {
      name: 'Resume',
      icon: '/assets/icons/recommended/word.png',
      action: null,
      willOpenWindowWith: <Resume />,
    },
    {
      name: 'Projects',
      icon: '/assets/icons/recommended/power-point.png',
      action: () => router.push('/portfolio/projects'),
      willOpenWindowWith: null,
    },
    {
      name: 'Trash',
      icon: '/assets/icons/Desktop/recycle-bin-empty.png',
      action: null,
      willOpenWindowWith: <TrashBin />,
    },
    {
      name: 'Comment',
      icon: '/assets/icons/Desktop/comment.png',
      action: null,
      willOpenWindowWith: <CommentsForm />,
    },
    {
      name: 'Acknowledgments',
      icon: '/assets/icons/Desktop/acknowledgment.png',
      action: null,
      willOpenWindowWith: <Acknowledgments />,
    },
    {
      name: 'Comments',
      icon: '/assets/icons/Desktop/comments.png',
      action: null,
      willOpenWindowWith: <CommentsList />,
    },
  ];
};
