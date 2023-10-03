// let num = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim();
let num = require('fs').readFileSync("/dev/stdin").toString().trim();

let chkNum = num;
let startNum = 1;
let startDenominator = 1;
while(chkNum > 0){
  chkNum -= startDenominator;
  startNum += startDenominator;
  startDenominator += 1;
}

startDenominator -= 1;
startNum -= startDenominator;

let dNum = num - startNum;

console.log(startDenominator % 2 == 0 ? (1 + dNum)+'/'+(startDenominator - dNum) : (startDenominator - dNum)+'/'+(1 + dNum));
