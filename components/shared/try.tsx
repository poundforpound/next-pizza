'use client';
import React, { useState } from 'react';

interface Props {
  className?: string;
}

export const Try: React.FC<Props> = ({ className }) => {
  const [count, setCount] = useState(0);
  const addValue = () => {
    setCount((value) => value + 1);
  };
  return (
    <div className={className}>
      <p>Current value:{count}</p>
      <button onClick={addValue}>addValue</button>
    </div>
  );
};
