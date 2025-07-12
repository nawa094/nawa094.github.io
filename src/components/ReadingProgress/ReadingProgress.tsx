import React, { useState, useEffect } from 'react';
import './ReadingProgress.css';

const ReadingProgress: React.FC = () => {
  const [readingProgress, setReadingProgress] = useState(0);

  useEffect(() => {
    const updateReadingProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setReadingProgress(progress);
    };

    window.addEventListener('scroll', updateReadingProgress);
    return () => window.removeEventListener('scroll', updateReadingProgress);
  }, []);

  return (
    <div className="reading-progress-container">
      <div
        className="reading-progress-bar"
        style={{ width: `${readingProgress}%` }}
      />
    </div>
  );
};

export default ReadingProgress;
