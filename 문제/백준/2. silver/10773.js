let [k, ...list] = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split('\n')
// let [k, ...list] = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n')

let arr = [];
for (let i = 0; i < k; i++) {
  list[i] == 0 ? arr.pop() : arr.push(list[i]);
}
console.log(arr.length === 0 ? 0 : arr.reduce((a, b) => +a + +b));
