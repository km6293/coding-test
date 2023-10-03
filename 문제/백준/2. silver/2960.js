// const [n, k] = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split(' ');
const [n, k] = require('fs').readFileSync("/dev/stdin").toString().trim().split(' ');

let arr = Array.from({length: n} , (v, i) => i+1);
arr[0] = 0;
let cnt = 0;
let chk = true;

while(chk){
  let fIndex = arr.findIndex(e => e != 0);
  for(let i = fIndex; i < arr.length; i += fIndex+1){
    if(arr[i] != 0){
      cnt += 1;
      if(cnt == k){
        console.log(arr[i]);
        chk = false;
        break;
      }
      arr[i] = 0
    }
  }
}




