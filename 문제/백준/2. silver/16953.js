const [A,B] = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split(' ').map(Number);
// const [A,B] = require('fs').readFileSync("/dev/stdin").toString().trim().split(' ').map(Number);

let chk = false;
let result = -1;
function dfs(a, cnt){
  a = +a;
  if(a === B) {
    chk = true;
    result = cnt;
    return;
  }
  if(a > B) return;
  if(!chk){
    dfs(a*2, cnt+1);
    dfs(a+'1', cnt+1);
  }
}

dfs(A, 1);
console.log(result);
