let [N, ...list] = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split('\n')
// let [N, ...list] = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n')

let obj = {};
list.forEach(e => obj[e] === undefined ? obj[e] = 1 : obj[e] += 1 )

for(const [key, value] of Object.entries(obj)){
  if(value % 2 === 1){
    console.log(key)
    break;
  }
}