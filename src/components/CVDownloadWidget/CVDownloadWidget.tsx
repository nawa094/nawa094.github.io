import React, { useState, useRef, useEffect } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import './CVDownloadWidget.css';

const CVDownloadWidget: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const widgetRef = useRef<HTMLDivElement>(null);

  const cvMarkdownUrl = useBaseUrl('/Nawa_Mumbwe_CV.md');
  const cvPdfUrl = useBaseUrl('/Nawa_Mumbwe_CV.pdf');

  const handleDownload = (type: 'pdf' | 'md') => {
    const url = type === 'pdf' ? cvPdfUrl : cvMarkdownUrl;
    const filename =
      type === 'pdf' ? 'Nawa_Mumbwe_CV.pdf' : 'Nawa_Mumbwe_CV.md';

    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.click();
    setIsMenuOpen(false);
  };

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        widgetRef.current &&
        !widgetRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
        setIsHovered(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="cv-download-widget-container" ref={widgetRef}>
      {isMenuOpen && (
        <div className="cv-download-menu">
          <div className="menu-title">Download CV as:</div>
          <button
            className="menu-option"
            onClick={() => handleDownload('pdf')}
            onKeyDown={e => {
              if (e.key === 'Enter' || e.key === ' ') {
                handleDownload('pdf');
              }
            }}
            tabIndex={0}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="menu-icon"
            >
              <path
                d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6z"
                fill="currentColor"
              />
              <path
                d="M14 2v6h6M8 10h8v2H8v-2zm0 4h8v2H8v-2z"
                fill="currentColor"
              />
            </svg>
            <span>PDF Format</span>
          </button>
          <button
            className="menu-option"
            onClick={() => handleDownload('md')}
            onKeyDown={e => {
              if (e.key === 'Enter' || e.key === ' ') {
                handleDownload('md');
              }
            }}
            tabIndex={0}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="menu-icon"
            >
              <path
                d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6z"
                fill="currentColor"
              />
              <path
                d="M8 10h8v2H8v-2zm0 4h8v2H8v-2zm0-8h2v2H8V6z"
                fill="currentColor"
              />
            </svg>
            <span>Markdown Format</span>
          </button>
        </div>
      )}

      <div
        className="cv-download-widget"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => !isMenuOpen && setIsHovered(false)}
        onClick={handleClick}
        title="Download my CV"
        role="button"
        tabIndex={0}
        onKeyDown={e => {
          if (e.key === 'Enter' || e.key === ' ') {
            handleClick();
          }
        }}
      >
        {isHovered || isMenuOpen ? (
          // Download icon when hovered or menu is open
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
    </div>
  );
};

export default CVDownloadWidget;
