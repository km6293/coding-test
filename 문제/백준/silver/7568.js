// let input = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split("\n");
let input = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");
input.shift();

let numList = Array(input.length).fill(1);
for(let i = 0; i < input.length; i++){
  let [aKg, aCm] = input[i].split(' ');
  for(let r = 0; r < input.length; r++){
    if(i != r){
      let [bKg, bCm] = input[r].split(' ');
      if(parseInt(aKg) < parseInt(bKg) && parseInt(aCm) < parseInt(bCm)) numList[i] += 1;
    }
  }
}
console.log(numList.join(' '));
