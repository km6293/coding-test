let [n, ...arr] = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split("\n");
// let [n, ...arr] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");

let list = Array.from({length:+n}, () => []);
let index = -1;
for(let i = 0 ; i < arr.length; i++){
  const [A,B,C] = arr[i].split(' ').map(Number)
  if(C) index += 1;
  list[index].push(C ? [A,B,C] : [A,B])
}

let dy = [0, 0, -1, 1];
let dx = [1, -1, 0, 0];

console.log(list.map(e => {
  const [N,M,K] = e.shift();
  let arr = Array.from({ length: N }, () => new Array(M).fill(0));
  e.forEach((a) => arr[a[0]][a[1]] = 1 );
  
  let cnt = 0;
  function dfs(x, y){
    arr[x][y] = 0;
    for(let k = 0; k < 4; k++){
      let nx = x + dx[k];
      let ny = y + dy[k];
      if(nx >= 0 && ny >= 0 && nx < N && ny < M && arr[nx][ny] == 1) dfs(nx, ny);
    }
  }

  for(let i = 0; i < N; i++){
    for(let j = 0; j < M; j++){
      if(arr[i][j] == 1){
        arr[i][j] = 0;
        cnt += 1;
        dfs(i, j);
      }
    }
  }
  return cnt
}).join('\n'));
