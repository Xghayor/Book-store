import React from 'react';
import { useSelector } from 'react-redux';

const Status = () => {
  const currentState = useSelector((state) => state.categories.status);

  return <h1>{currentState}</h1>;
};

export default Status;
