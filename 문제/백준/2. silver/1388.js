let input = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split("\n");
// let input = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input.shift().split(' ').map(Number);
input = input.map(e => e.trim().split(''));

let dy = [1, -1, 0, 0];
let dx = [0, 0, 1, -1];
let cnt = 0;

function dfs(i, j){
  if(i > -1 && j > -1 && i < N && j < M && input[i][j] !== 'X'){

    const chkRowCol = input[i][j] === '-' ? [0,1] : [2,3];
    const value = input[i][j];
    input[i][j] = 'X';

    for(let k = chkRowCol[0]; k < chkRowCol[1]+1; k++){
      const my = dx[k] + i;
      const mx = dy[k] + j;

      if(mx > -1 && my > -1 && mx < M && my < N){
        if(input[my][mx] !== 'X' && value === input[my][mx]){
          dfs(my,mx);
        }
      }
    }
  }
}

for(let i = 0; i < N; i++){
  for(let j = 0; j < M; j++){
    if(input[i][j] !== 'X') {
      cnt += 1;
      dfs(i, j);
    }
  }
}
console.log(cnt)

