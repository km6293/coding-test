let [N, list] = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split("\n");
// let [N, list] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");

list = list.split(' ').map(Number).sort((a,b) => b - a);
let cnt = 0;

while(true){
  let chk = 0;
  cnt += 1;

  let arr = list.map(e => (e > 0 && chk < 2) ? (chk += 1, e - 1) : e);
  list = arr.sort((a,b) => b - a);

  if(cnt > 1440) cnt = -1;
  if(list.every(e => e === 0) || cnt === -1) break;
}

console.log(cnt);