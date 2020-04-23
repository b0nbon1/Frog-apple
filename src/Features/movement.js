import React, { useEffect } from 'react';
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

const playGround = ({
  apples,
  setApples,
  setMoves,
  moves,
  setFrogPosition,
  frogPosition,
}) => {
  const updateMove = () => {
    setMoves((prevState) => (apples.length && moves + 1) || prevState);
  };
  const handleKeyDown = (event) => {
    event.preventDefault();
    if (event.keyCode === 39 && frogPosition < 100) {
      updateMove();
      setFrogPosition(frogPosition + 1);
      window.removeEventListener('keydown', handleKeyDown);
    } else if (event.keyCode === 37 && frogPosition > 1) {
      updateMove();
      setFrogPosition(frogPosition - 1);
      window.removeEventListener('keydown', handleKeyDown);
    } else if (event.keyCode === 38 && frogPosition - 10 >= 1) {
      updateMove();
      setFrogPosition(frogPosition - 10);
      window.removeEventListener('keydown', handleKeyDown);
    } else if (event.keyCode === 40 && frogPosition + 10 <= 100) {
      updateMove();
      setFrogPosition(frogPosition + 10);
      window.removeEventListener('keydown', handleKeyDown);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
  }, [frogPosition]);

  if (apples.includes(frogPosition)) {
    const arry = apples;
    const index = arry.findIndex((i) => i === frogPosition);
    arry.splice(index, 1);
    setApples(arry);
  }

  const divs = [];
  for (let i = 1; i <= 100; i += 1) {
    divs.push(
      <div className={wrapper} key={i}>
        <div className={Item}>
          {i === frogPosition && '🐸'}
          {apples.includes(i) && '🍎'}
        </div>
      </div>,
    );
  }
  return divs;
};

export default playGround;
