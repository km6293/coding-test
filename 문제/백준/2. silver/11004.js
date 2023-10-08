// const fs = require("fs");
// const filePath =
//   process.platform === "linux" ? "/dev/stdin" : __dirname + "/../input.txt";
// const [n, input] = fs.readFileSync(filePath).toString().trim().split("\n");

// let [aArr, bArr] = [n.split(" "), input.split(" ")];
// bArr = bArr.sort((a, b) => a - b);

// console.log(bArr[aArr[1] - 1]);

const input = require("fs")
  .readFileSync(__dirname + "/../input.txt")
  .toString()
  .trim()
  .split("\n");
const [N, K] = input[0].split(" ").map((v) => Number(v));
const nums = input[1].split(" ").map((v) => Number(v));

nums.sort((a, b) => a - b);

console.log(nums[K - 1]);
