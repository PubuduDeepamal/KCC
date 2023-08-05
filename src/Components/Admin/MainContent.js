// MainContent.js
import React from 'react';

function MainContent({ selectedMenuItem }) {
  // Render different content based on the selected menu item
  const renderContent = () => {
    switch (selectedMenuItem) {
      case 'overview':
        return <div>Overview Content</div>;
      case 'analytics':
        return <div>Analytics Content</div>;
      case 'settings':
        return <div>Settings Content</div>;
      default:
        return <div>Invalid Selection</div>;
    }
  };

  return <div className="main-content">{renderContent()}</div>;
}

export default MainContent;
