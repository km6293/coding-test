let [n, nList, m, mList] = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split("\n");
// let [n, nList, m, mList] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");

n = +n;
m = +m;
nList = nList.split(' ').map(Number);
mList = mList.split(' ').map(Number);

const nObj = {};
nList.forEach(val => {
  nObj[val] = nObj[val] === undefined ? 1 : nObj[val] + 1
})

const result = [];
mList.map(val => {
  result.push(nObj[val] === undefined ? 0 : nObj[val])
})

console.log(result.join(' '));