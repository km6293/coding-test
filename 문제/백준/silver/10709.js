const [N, ...arr] = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split("\n");
// const [N, ...arr] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");

let rArr = new Array(arr.length).fill().map(()=> new Array(arr[0].length).fill(-1));
for(let i = 0; i < arr.length; i++){
  let num = -1;
  for(let r = 0; r < arr[0].length; r++){
    if(arr[i][r] == 'c') {
      num = 0;
      rArr[i][r] = num;      
    }
    if(arr[i][r] == '.' && num != -1){
      rArr[i][r] = num
    }
    if(num != -1) num += 1; 
  }
}

[...rArr].forEach(e => console.log(...e))