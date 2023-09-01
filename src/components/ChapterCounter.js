import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './styles/ChapterCounter.css';

const ChapterCounter = ({ book, chapter }) => {
  const [counter, setCounter] = useState(chapter);

  const rawPercentage = (counter / book) * 100;
  const percentage = Math.min(100, Math.max(0, Math.round(rawPercentage)));

  const circleCircumference = Math.PI * (100 - 6);
  const strokeDasharrayValue = `${(circleCircumference * percentage) / 100}, ${circleCircumference}`;

  const incrementCounter = () => {
    if (counter < 30) {
      setCounter(counter + 1);
    }
  };

  return (
    <div className="counter-container">
      <div className="percent-box">
        <div className="progress-ring">
          <svg viewBox="0 0 100 100" className="circular-chart">
            <path
              className="circle-bg"
              d="M50 6
                 a 44 44 0 0 1 0 88
                 a 44 44 0 0 1 0 -88"
            />
            <path
              className="circle"
              strokeDasharray={strokeDasharrayValue}
              d="M50 6
                 a 44 44 0 0 1 0 88
                 a 44 44 0 0 1 0 -88"
            />
          </svg>
        </div>
      </div>

      <div className="percentage-label">
        {percentage}
        %
        <p>Completed</p>
      </div>

      <div className="chapter-box">
        <p className="current-chapter">Current Chapter</p>
        <h4 className="chapter-content">
          Chapter:
          {' '}
          {counter}
        </h4>
        <button type="button" className="update-button" onClick={incrementCounter}>
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
