let input = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim();
// let input = require('fs').readFileSync("/dev/stdin").toString().trim();

let stack = [];
let [answer, value] = [0, 1];
let [inType, outType] = [['(','['], [')',']']];

for(let i = 0; i < input.length; i++){
  console.log(input[i], value, answer)
  if(inType.includes(input[i])){
    stack.push(input[i]);
    value *= inType.indexOf(input[i]) + 2
  }else{

    if(stack.length === 0){
      answer = 0;
      break;
    }

    let outIndex = outType.indexOf(input[i]);
    if(outIndex === -1 || inType.indexOf(stack.pop()) !== outIndex){
      answer = 0;
      break;
    }

    if(inType.indexOf(input[i-1]) == outIndex) answer += value;
    
    value /= outIndex + 2
  }
}

if(stack.length !== 0) answer = 0;

console.log(answer)

