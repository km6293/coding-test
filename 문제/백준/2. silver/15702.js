// let input = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split('\n');
let input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n');
input.shift();
let scoreList = input.shift().split(' ');
let [max, maxNum] = [-1, 100001];

for(let i = 0; i < input.length; i++){
  let list = input[i].split(' ');
  let score = 0;
  list.forEach((e,i) => { if(e == 'O') score += parseInt(scoreList[i-1]); })
  if(score > max || (score == max && maxNum > parseInt(list[0]))){
    maxNum = parseInt(list[0]);
    max = score;
  }
}

console.log(maxNum, max);

