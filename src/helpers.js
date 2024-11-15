/**randomChoice takes in an array and returns a random element from that array */

const randomChoice = (arr) => {
  let randomIdx = Math.floor(Math.random() * arr.length);
  return arr[randomIdx];
};

export { randomChoice };
