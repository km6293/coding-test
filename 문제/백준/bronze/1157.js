let str = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().toUpperCase();
// let str = require('fs').readFileSync("/dev/stdin").toString().trim().toUpperCase();

let map = {};
for(let v of str){
  map[v] === undefined ? map[v] = 1 : map[v] += 1;
}

let maxKey = null;
let maxValue = 0;

for(const key in map){
  if(maxValue < map[key]){
    maxKey = key;
    maxValue = map[key];
  }
}

console.log(Object.values(map).filter(e => e === maxValue).length > 1 ? "?" : maxKey);