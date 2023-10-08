const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/../input.txt";
const [n, ...arr] = fs.readFileSync(filePath).toString().trim().split(/\s/);

arr.sort((a, b) => a - b);
let sum = 0;
let total = 0;
for (let i = 0; i < arr.length; i++) {
  sum += parseInt(arr[i]);
  total += sum;
}
console.log(total);
