import React, { useState, useEffect } from 'react';
import { css } from 'emotion';

const arr = new Array(100);

const Grid = css`
  width: 800px;
  height: 800px;
  display: inline-grid;
  position: relative;
  grid-template-columns: auto auto auto auto auto auto auto auto auto auto;
  background-color: #3e2723;
`;

const Item = css`
  background-color: #80cbc4;
  border: 1px solid #fff;
  padding: 20px;
  font-size: 30px;
  text-align: center;
`;

const displayForm = () => {
  console.log('>>>>>>>>>><<<<<<<<<<<<<<<<<<<<');

  const divs = [];
  for (let i = 0; i < 100; i += 1) {
    divs.push(<div className={Item} key={i} />);
  }
  return divs;
};
const World = () => {
  const [point, setPoint] = useState(20);
  console.log('>>>>>>>>>><<<<<<<<<<<<<<<<<<<<', point);

  const handleKeyDown = (event) => {
    event.preventDefault();
    console.log(event.keyCode);
    if (event.keyCode === 39) {
      console.log('pppppppp');
      setPoint(point + 80);
    }
  };
  useEffect(() => {
    window.addEventListener('keydown', (e) => {
      handleKeyDown(e);
    });
  }, []);
  return (
    <div className={Grid}>
      {/* {displayForm()} */}
      {arr.fill().map((item, i) => (
        <div className={Item} key={i} />
      ))}
      <div
        className={css`
          position: absolute;
          top: 20px;
          left: ${point}px;
        `}
      >
        guy
      </div>
    </div>
  );
};

export default World;
