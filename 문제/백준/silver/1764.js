const [nArr, ...arr] = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split("\n");
// const [nArr, ...arr] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");

let [a,b] = nArr.split(' ').map(Number);
let obj = {};

arr.forEach(e => {
  obj[e] === undefined ? obj[e] = 1 : obj[e] += 1
})

let cnt = 0;
let rArr = [];
for(let [a,b] of Object.entries(obj)){
  if(b > 1){
    cnt +=1 ;
    rArr.push(a)
  }
}

rArr.sort();

console.log(cnt);
rArr.forEach(e => console.log(e));


