import React from 'react';
import type { NextPage } from 'next';
import PortfolioLayout from '../../components/Portfolio/PortfolioLayout/PortfolioLayout';
import Navbar from '../../components/Portfolio/Navbar/Navbar';

/**
 *Renders articles page with the list of latest dev.to articles
 *@important this page pre-fetches and pre-generates data on server. "loadLatestArticles" is dispatched on server to fetch the list of latest  articles from the DEV.TO API. Later articles are globally available through redux store
 *@function ArticlesPage
 *@param {string} title - title of page
 *@returns {JSX.Element} - Rendered Clock component
 */

const CADModelsPage: NextPage = () => {
  return (
    <PortfolioLayout title="My CAD Models">
      <Navbar isLogoExpanded={true} />
      <div
        style={{
          minHeight: '60vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <h1
          style={{
            color: '#2bff88',
            fontSize: '2.5rem',
            marginBottom: '1.5rem',
          }}
        >
          My CAD Models
        </h1>
        <p
          style={{
            color: '#fff',
            fontSize: '1.25rem',
            textAlign: 'center',
            maxWidth: 600,
          }}
        >
          Here you will soon find a showcase of my CAD (Computer-Aided Design)
          models and 3D projects.
          <br />
          Stay tuned for updates!
        </p>
      </div>
    </PortfolioLayout>
  );
};

export default CADModelsPage;
