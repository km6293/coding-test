let [a,b] = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split("\n");
// let [a,b] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");

let cnt = 0;
while(a.indexOf(b) != -1){
  const index = a.indexOf(b);
  a = a.substring(index + b.length, a.length+1);
  cnt += 1;
}

console.log(cnt);

