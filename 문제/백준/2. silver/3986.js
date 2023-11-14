let [N,...arr] = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split("\n");
// let [N,...arr] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");

let cnt = 0;

arr.forEach(e => {
  let value = e.trim();
  let stack = [];

  for(let i = 0; i < value.length; i++){
    stack[stack.length-1] === value[i] ? stack.pop() : stack.push(value[i]);
  }

  if(stack.length === 0) cnt += 1;
})

console.log(cnt);