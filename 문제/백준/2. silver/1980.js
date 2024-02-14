let [n, m, t] = require("fs")
  .readFileSync(__dirname + "/../input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

// let [n, m, t] = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split(" ")
//   .map(Number);

let coke = 0;

const findAnswer = () => {
  const result = [];
  for (let i = 0; i <= t / n; i++) {
    for (let j = 0; j <= t / m; j++) {
      if (i * n + j * m === t) {
        result.push(i + j);
      }
    }
  }
  return result;
};

while (true) {
  const arr = findAnswer();
  if (arr.length > 0) {
    console.log(Math.max(...arr), coke);
    break;
  } else {
    coke += 1;
    t -= 1;
  }
}
