import React from 'react';
import { css } from 'emotion';

const shadow = css`
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  background-color: rgba(64, 64, 64, 0.7);
`;

const button = css`
  font-weight: 600;
  border: 0;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  padding: 0.5rem 1.25rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 50px;
  background-color: #0d96f2;
  color: white;
  outline: 0;
  cursor: pointer;
`;

const modal = css`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 30%;
  height: 150px;
  margin: auto;
  background-color: white !important;
  z-index: 100;
  border-radius: 10px;
  text-align: center;
  diplay: block;
`;

const ScoreBoard = ({ moves }) => {
  return (
    <>
      <div className={shadow} />
      <div className={modal}>
        <h1>
          Total moves:
          {''}
          {moves}
        </h1>
        <button
          onClick={() => window.location.reload()}
          className={button}
          type='button'
        >
          Restart
        </button>
      </div>
    </>
  );
};

export default ScoreBoard;
