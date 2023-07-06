const [nArr, ...arr] = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split("\n");
// const [nArr, ...arr] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");

// 1번째 방법
// let [a,b] = nArr.split(' ').map(Number);
// let obj = {};

// arr.forEach(e => {
//   obj[e] === undefined ? obj[e] = 1 : obj[e] += 1
// })

// let cnt = 0;
// let rArr = [];
// for(let [a,b] of Object.entries(obj)){
//   if(b > 1){
//     cnt +=1 ;
//     rArr.push(a)
//   }
// }

// rArr.sort();

// console.log(cnt);
// rArr.forEach(e => console.log(e));


// 2번째 방법
// let obj = {};

// arr.forEach(v =>  obj[v] = (obj[v] || 0) + 1 )
// const dupl = Object.keys(obj).filter(v => obj[v] > 1).sort();

// console.log(dupl.length);
// dupl.forEach(v => console.log(v));
