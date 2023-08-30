import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ChapterCounter = ({ book, chapter }) => {
  const [counter, setCounter] = useState(chapter);

  const rawPercentage = (counter / book) * 100;
  const percentage = Math.min(100, Math.max(0, Math.round(rawPercentage)));

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="counter-container">
      <div className="percent-box">
        <h4>
          {percentage}
          {' '}
          % Completed
        </h4>
      </div>

      <div className="chapter-box">
        <p>Chapter</p>
        <h3>
          Chapter :
          {' '}
          {counter}
        </h3>
        <button type="button" onClick={incrementCounter}>Update Progress</button>
      </div>
    </div>
  );
};

ChapterCounter.propTypes = {
  book: PropTypes.number.isRequired,
  chapter: PropTypes.number.isRequired,
};

export default ChapterCounter;
