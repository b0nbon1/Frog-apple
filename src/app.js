import React from 'react';
import World from './Features';

const app = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <h1>Use Arrow Keys to move the frog</h1>
      <World />
    </div>
  );
};

export default app;
