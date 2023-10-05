const N = BigInt(require('fs').readFileSync(__dirname + "/../input.txt").toString());
// const N = BigInt(require('fs').readFileSync("/dev/stdin").toString());

console.log(((N*(N-1n)*(N-2n))/6n).toString());
console.log(3)