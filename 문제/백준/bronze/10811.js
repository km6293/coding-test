let [num , ...list] = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split('\n');
// let [num , ...list] = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n');

const [N, M] = num.split(' ').map(Number);
list = list.map(e => e.trim());
let results = Array.from({length : N}, (_,i) => i+1);

list.forEach(e => {
  let [i, j] = e.split(' ').map(Number);
  results = [...results.slice(0, i - 1), ...results.slice(i-1, j).reverse(), ...results.slice(j)];
})

console.log(...results);
