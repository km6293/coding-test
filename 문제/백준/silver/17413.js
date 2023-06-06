// const input = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim();
const input = require('fs').readFileSync("/dev/stdin").toString().trim();

let stack = '';
let rs = '';
let chk = false;
for(let i = 0; i < input.length; i++){

  if(input[i] == '<' ) chk = true;
  if(chk){
    rs += input[i];
    if(input[i] == '>') chk = false;
  }else if(input[i] == ' '){
    rs += input[i];
  }else{
    stack += input[i];
  }

  if(input[i+1] == ' ' || input[i+1] == '<' || i == input.length -1){
    for(let r = stack.length-1; r >= 0; r--) rs += stack[r];
    stack = '';
  }
}

console.log(rs);
