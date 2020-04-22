import React from 'react';
// import { Provider } from 'react-redux';
import World from './Features';
// import store from './store';

const app = () => {
  return (
    // <Provider store={store}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <World />
      </div>
    // </Provider>
  );
};

export default app;
