let [N, ...list] = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split("\n");
// let [N, ...list] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");

list = list.map(Number);
let cnt = 1;
let chk = false;
let stack = [];
let result = [];

for(let i = 0 ; i < +N; i++){
  while(cnt <= list[i]){
    stack.push(cnt);
    result.push('+');
    cnt += 1;
  }

  if(stack.pop()!== list[i]){
    chk = true
    break;
  }

  result.push('-');
}

console.log(chk ? 'NO' : result.join('\n'));

