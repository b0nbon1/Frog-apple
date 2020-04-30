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
      <h6>
        {' '}
        it&rsquo;s an open source game, raise an issue to make it better:
        <a href='https://github.com/b0nbon1/Frog-apple/issues'>
          b0nbon1/frog-apples
        </a>
      </h6>
    </div>
  );
};

export default app;
