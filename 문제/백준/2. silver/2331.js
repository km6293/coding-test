let [val, P] = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split(' ')
// let [val, P] = require('fs').readFileSync("/dev/stdin").toString().trim().split(' ')

let arr = []
let index = -1;

while(true){
  arr.push(val)
  val = ''+val.split('').map(Number).reduce((a,b) => a + b ** P, 0);

  if(arr.indexOf(val) !== -1){
    index = arr.indexOf(val);
    break;
  }
}

console.log(index)
