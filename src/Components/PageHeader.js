import React from 'react';
import { useLocation } from 'react-router-dom';
import '../Styles/PageHeader.css';

const PageHeader = ({ pageName, breadcrumb }) => {
  const location = useLocation();

  // Determine the current page path (you can customize this logic based on your app's structure)
  const currentPath = location.pathname;

  return (
    <div className="page-header">
      <div className="page-header-content">
        <h1>{pageName}</h1>
        <p>{breadcrumb}</p>
      </div>
    </div>
  );
};

export default PageHeader;
