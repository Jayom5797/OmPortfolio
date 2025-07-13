import type { NextPage } from 'next';
import React from 'react';

import PortfolioLayout from '../../../components/Portfolio/PortfolioLayout/PortfolioLayout';
import Resume from '../../../components/Portfolio/Resume/Resume';

const PortfolioLandingPage: NextPage = () => {
  return (
    <PortfolioLayout title={'Om Singh | Résumé'}>
      <Resume />
    </PortfolioLayout>
  );
};

export default PortfolioLandingPage;
