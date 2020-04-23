const shaffle = () => {
  const arr = [];
  while (arr.length < 10) {
    const r = Math.floor(Math.random() * 100) + 1;
    if (arr.indexOf(r) === -1 && r !== 1) arr.push(r);
  }

  return arr;
};

export default shaffle;
