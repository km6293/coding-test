let [a, b] = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split(' ').map(Number);
// let [a, b] = require('fs').readFileSync("/dev/stdin").toString().trim().split(' ').map(Number);

let arr = [];
let index = 2;
while(index <= b){
  let isPrime = true;
  for(let i = 2; i <= Math.sqrt(index); i++){
    if(index % i == 0){
      isPrime = false;
      break;
    }
  }
  if(isPrime && index >= a) arr.push(index);
  index += 1;
}

console.log(arr.join('\n'));