const input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");

const [n, m, v] = input[0].split(" ").map(Number);
const mulitpleInput = input[1].split(" ").map(Number);