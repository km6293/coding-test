let [size, direction, ...input] = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split('\n');
// let [size, direction, ...input] = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n');

const [N, M] = size.split(' ').map(Number);
let [r, c, d] = direction.split(' ').map(Number)
let list = input.map(row => row.split(' ').map(Number));
let cnt = 0;
const coordinate = [[-1,0], [0,1], [1,0], [0,-1]];
const checkCoordinate = [[3,2,1,0], [0,3,2,1], [1,0,3,2], [2,1,0,3]];
const converseCoordinate = [[1,0], [0,-1], [-1,0], [0,1]];

const dfs = (r,c,d) => {
  if(list[r][c] === 0){
    cnt += 1
    list[r][c] = 2;
  }
  
  const checkDirection = checkValue(r, c, d);

  if(checkDirection === -1){
    const [my, mx] = converseCoordinate[d];
    const ny = r + my;
    const nx = c + mx
    if(ny >= 0 && nx >= 0 && ny < N && nx < M && list[ny][nx] !== 1){
      dfs(ny, nx, d)
    }
    
  }else{
    const [my, mx, nextDirection] = checkDirection;
    dfs(my, mx, nextDirection)
  }
}

const checkValue = (r, c, d) => {
  const timeList = checkCoordinate[d];
  for(let i = 0; i < 4; i++){
    const nextDirection = timeList[i]
    const [my, mx] = coordinate[nextDirection]
    const ny = r + my;
    const nx = c + mx;
    if(ny >= 0 && nx >= 0 && ny < N && nx < M && list[ny][nx] === 0){
      return [ny,nx, nextDirection]
    }
  }
  return -1;
}


dfs(r, c, d)
console.log(cnt);

