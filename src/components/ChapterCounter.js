import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './styles/ChapterCounter.css';

const ChapterCounter = ({ book, chapter }) => {
  const [counter, setCounter] = useState(chapter);

  const rawPercentage = (counter / book) * 100;
  const percentage = Math.min(100, Math.max(0, Math.round(rawPercentage)));

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const progressRingStyle = {
    background: `conic-gradient(#3498db ${percentage}%, #f9f9f9 ${percentage}% 100%)`,
  };

  return (
    <div className="counter-container">
      <div className="percent-box">
        <div className="progress-ring" style={progressRingStyle}>
          <h4>
            {percentage}
            %
          </h4>
        </div>
      </div>

      <div className="chapter-box">
        <p>Chapter</p>
        <h3>
          Chapter:
          {' '}
          {counter}
        </h3>
        <button type="button" onClick={incrementCounter}>
          Update Progress
        </button>
      </div>
    </div>
  );
};

ChapterCounter.propTypes = {
  book: PropTypes.number.isRequired,
  chapter: PropTypes.number.isRequired,
};

export default ChapterCounter;
