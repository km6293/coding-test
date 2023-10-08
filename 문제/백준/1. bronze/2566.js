let list = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split('\n');
// let list = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n');

list = list.map(e => e.trim().split(' ').map(Number));

let max = 0;
let [x, y] = [0, 0];

for(let i = 0 ; i < list.length; i++){
  for(let j = 0; j < list[0].length; j++){
    if(list[i][j] > max){
      max = list[i][j];
      [x, y] = [i, j];
    }
  }
}

console.log(max);
console.log(x+1, y+1);
