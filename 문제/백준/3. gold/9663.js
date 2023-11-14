let num = Number(require('fs').readFileSync(__dirname + "/../input.txt").toString().trim());
// let num = Number(require('fs').readFileSync("/dev/stdin").toString().trim());

const chk = (ax, ay, bx, by) => (ax == bx || ay == by || Math.abs((ax - bx) / (ay - by)) == 1);

let cnt = 0;
const arr = [];
function dfs(depth){

  if(depth == num){
    cnt += 1;
    return;
  }

  for(let i = 0; i < num; i++){
    let isChk = true;
    for(let j = 0; j < arr.length; j++) {
      if(chk(i, depth, arr[j], j)) isChk = false;
    }

    if(isChk){
      arr.push(i);
      dfs(depth + 1);
      arr.pop();
    }

  }
}
dfs(0);

console.log(cnt);