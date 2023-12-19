// let input = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split("\n");
// let input = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");
// input.shift();

// let numList = Array(input.length).fill(1);
// for(let i = 0; i < input.length; i++){
//   let [aKg, aCm] = input[i].split(' ');
//   for(let r = 0; r < input.length; r++){
//     if(i != r){
//       let [bKg, bCm] = input[r].split(' ');
//       if(parseInt(aKg) < parseInt(bKg) && parseInt(aCm) < parseInt(bCm)) numList[i] += 1;
//     }
//   }
// }
// console.log(numList.join(' '));


// ==============================================================================

let [N, ...list] = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split("\n");
// let [N, ...list] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");

let input = list.map(e => e.split(' ').map(Number));
let ranking = [];

for(let i = 0 ; i < input.length; i++){
  let cnt = 1;
  for(let j = 0; j < input.length; j++){
    if(i !== j && input[i][0] < input[j][0] && input[i][1] < input[j][1] ) cnt += 1;
  }
  ranking.push(cnt)
}

console.log(ranking.join(' '));