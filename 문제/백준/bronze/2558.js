const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/../input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let a = input[0];
let b = input[1];
console.log(parseInt(a) * parseInt(b[2]));
console.log(parseInt(a) * parseInt(b[1]));
console.log(parseInt(a) * parseInt(b[0]));
console.log(parseInt(a) * parseInt(b));
