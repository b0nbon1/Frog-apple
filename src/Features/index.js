import React, { useState, useEffect } from 'react';
import { css } from 'emotion';
import shaffle from '../utils/helper';
import playGround from './movement';
import ScoreBoard from './ScoreBoard';

const Grid = css`
  width: 600px;
  height: 600px;
  display: inline-grid;
  box-sizing: border-box;
  grid-template-columns: auto auto auto auto auto auto auto auto auto auto;
  background-color: #3e2723;
`;

/**
 * Component world renders the grid square
 * @returns {jsx} Grid display
 */
const World = () => {
  const [apples, setApples] = useState([]);
  const [moves, setMoves] = useState(0);

  useEffect(() => {
    setApples(shaffle());
  }, []);

  return (
    <>
      <div className={Grid}>
        {playGround({ apples, setApples, moves, setMoves })}
      </div>
      {apples.length === 0 && <ScoreBoard moves={moves} />}
    </>
  );
};

export default World;
