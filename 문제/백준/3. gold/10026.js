let [N, ...arr] = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split("\n");
// let [N, ...arr] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");

let rgbList = [...arr];
let bxList = [...arr];

let rgbCnt = 0;
let bxCnt = 0;

for(let i = 0; i < N; i++){
  for(let j = 0; j < N; j++){
    if(bxList[i][j] === 'G'){
      bxList[i] = bxList[i].substring(0, j) + 'R' + bxList[i].substring(j+1, N);
    }
  }
}

let dx = [1, -1, 0, 0];
let dy = [0, 0, 1, -1];

const bfs = (list, y, x, gubun) => {
  gubun === 0 ? rgbCnt += 1 : bxCnt += 1
  const queue = [[y, x]]
  let nowColor = list[y][x];

  while(queue.length > 0){

    const [my, mx] = queue.shift();

    for(let i = 0; i < 4; i++){
      const ny = my + dy[i];
      const nx = mx + dx[i];
      
      if(ny >= 0 && nx >= 0 && ny < N && nx < N && list[ny][nx] !== 'X' && list[ny][nx] === nowColor){
        list[ny] = list[ny].substring(0, nx) + 'X' + list[ny].substring(nx+1, N);
        queue.push([ny, nx])
      }
    }
  }
}

const check = (list, gubun) => {
  for(let i = 0; i < N ; i++){
    for(let j = 0; j < N; j++){
      if(list[i][j] !== 'X'){
        bfs(list, i, j, gubun)
      }
    }
  }
}

check(rgbList, 0)
check(bxList, 1)

console.log(rgbCnt, bxCnt)






