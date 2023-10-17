let list = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim();
// let list = require('fs').readFileSync("/dev/stdin").toString().trim();

const N = parseInt(list.length);
let length = 1;
let setList = new Set();

while(N !== length){
  for(let i = 0 ; i < N - length + 1; i++){
    setList.add(list.substring(i, i+length))
  } 
  
  length += 1; 
}

console.log(setList.size + 1)