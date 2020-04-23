import React, { useState, useEffect } from 'react';
import { css } from 'emotion';

const wrapper = css`
  position: relative;
`;

const Item = css`
  background-color: #80cbc4;
  border: 1px solid #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 10px;
  font-size: 20px;
`;

const playGround = ({ apples, setApples, setMoves, moves }) => {
  const [point, setPoint] = useState(1);
  const updateMove = () => {
    setMoves((prevState) => (apples.length && moves + 1) || prevState);
  };
  const handleKeyDown = (event) => {
    event.preventDefault();
    if (event.keyCode === 39 && point < 100) {
      updateMove();
      setPoint(point + 1);
      window.removeEventListener('keydown', handleKeyDown);
    } else if (event.keyCode === 37 && point > 1) {
      updateMove();
      setPoint(point - 1);
      window.removeEventListener('keydown', handleKeyDown);
    } else if (event.keyCode === 38 && point - 10 >= 1) {
      updateMove();
      setPoint(point - 10);
      window.removeEventListener('keydown', handleKeyDown);
    } else if (event.keyCode === 40 && point + 10 <= 100) {
      updateMove();
      setPoint(point + 10);
      window.removeEventListener('keydown', handleKeyDown);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
  }, [point]);

  if (apples.includes(point)) {
    const arry = apples;
    const index = arry.findIndex((i) => i === point);
    arry.splice(index, 1);
    setApples(arry);
  }

  const divs = [];
  for (let i = 1; i <= 100; i += 1) {
    divs.push(
      <div className={wrapper} key={i}>
        <div className={Item}>
          {i === point && '🐸'}
          {apples.includes(i) && '🍎'}
        </div>
      </div>,
    );
  }
  return divs;
};

export default playGround;
