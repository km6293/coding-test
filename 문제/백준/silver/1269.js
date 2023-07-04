let arr = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split("\n");
// let arr = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");

let a = arr[1].split(' ').map(Number);
let b = arr[2].split(' ').map(Number);

let union = {};
a.forEach(e => { if(union[e] == undefined) union[e] = false})
b.forEach(e => { if(union[e] == false) union[e] = true})

let intersectionCnt = 0;
for(let key in union){
  if(union[key]) intersectionCnt += 1;
}

console.log(a.length - intersectionCnt + b.length - intersectionCnt);