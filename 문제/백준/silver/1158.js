// let [len, num] = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split(" ");
let [len, num] = require('fs').readFileSync("/dev/stdin").toString().trim().split(" ");

let list = [...Array(parseInt(len))].map((e,i) => i+1);
let returnList = [];
let cnt = 1;

while(list.length != 0){
  let nVal = list.shift();
  cnt % parseInt(num) == 0 ? returnList.push(nVal) : list.push(nVal);
  cnt += 1;
}

console.log('<'+returnList.join(', ') + '>')




