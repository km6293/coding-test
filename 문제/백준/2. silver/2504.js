// const input = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim();
const input = require('fs').readFileSync("/dev/stdin").toString().trim();

let [answer, value] = [0, 1];
let stack = [];

for(let i = 0; i < input.length; i++){
  if(input[i] == '('){
    value *= 2;
    stack.push('(');
  }else if(input[i] == '['){
    value *= 3;
    stack.push('[');
  }else if(input[i] == ')'){
    if(stack.length == 0 || stack[stack.length-1] != '('){
      answer = 0;
      break;
    }
    if(input[i-1] == '(') answer += value;
    value /= 2;
    stack.pop();
  }else if(input[i] == ']'){
    if(stack.length == 0 || stack[stack.length-1] != '['){
      answer = 0;
      break;
    }
    if(input[i-1] == '[') answer += value;
    value /= 3;
    stack.pop();
  }
}
if(stack.length != 0) answer = 0;
console.log(answer)

