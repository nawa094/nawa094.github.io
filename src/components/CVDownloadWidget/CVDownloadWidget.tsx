import React, { useState } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import './CVDownloadWidget.css';

const CVDownloadWidget: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const cvUrl = useBaseUrl('/Nawa_Mumbwe_CV.md');

  const handleDownload = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Nawa_Mumbwe_CV.md';
    link.click();
  };

  return (
    <div
      className="cv-download-widget"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleDownload}
      title="Download my CV"
      role="button"
      tabIndex={0}
      onKeyDown={e => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleDownload();
        }
      }}
    >
      {isHovered ? (
        // Download icon when hovered
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="widget-icon"
        >
          <path
            d="M12 15.575l-3.6-3.6L9.825 10.55L11 11.725V4h2v7.725l1.175-1.175L15.6 11.975L12 15.575zM6 20c-.55 0-1.02-.196-1.412-.587A1.927 1.927 0 014 18V15h2v3h12v-3h2v3c0 .55-.196 1.02-.587 1.413A1.927 1.927 0 0118 20H6z"
            fill="currentColor"
          />
        </svg>
      ) : (
        // CV/Document icon when not hovered
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="widget-icon"
        >
          <path
            d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"
            fill="currentColor"
          />
          <path
            d="M8 10h8v2H8v-2zm0 4h8v2H8v-2zm0-8h2v2H8V6z"
            fill="currentColor"
          />
        </svg>
      )}
    </div>
  );
};

export default CVDownloadWidget;
