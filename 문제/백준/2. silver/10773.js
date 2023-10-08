const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/../input.txt";
const [n, ...input] = fs.readFileSync(filePath).toString().trim().split(/\s/);

let arr = [];
for (let i = 0; i < n; i++) {
  input[i] == 0 ? arr.pop() : arr.push(input[i]);
}
const val =
  arr.length == 0
    ? 0
    : arr.reduce((total, item) => parseInt(total) + parseInt(item));
console.log(val);
