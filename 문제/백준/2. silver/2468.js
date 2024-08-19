let [N, ...list] = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split('\n')
// let [N, ...list] = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n')

N = +N;
let [minHeight, maxHeight] = [Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER];

list = list.map(row => {
  const refineRow = row.split(' ').map(Number);

  maxHeight = Math.max(maxHeight, Math.max(...refineRow));
  minHeight = Math.min(minHeight, Math.min(...refineRow));

  return refineRow;
});

const dy = [0,0,-1,1];
const dx = [1,-1,0,0];

const dfs = (direction, heigth, visitList) => {
  const [ny, nx] = direction;
  visitList[ny][nx] = true;

  for(let i = 0; i < 4; i++){
    const my = dy[i] + ny;
    const mx = dx[i] + nx;
    
    if(my >= 0 && mx >= 0 && my < N && mx < N && !visitList[my][mx] && list[my][mx] > heigth){      
      dfs([my,mx], heigth, visitList)
    }
  }
}

let maxSafeCount = 0;
const visitList = Array.from({length: N}, () => Array.from({length: N}, () => false));
for(let k = minHeight-1; k < maxHeight; k++){
  let safeCount = 0;
  for (let i = 0; i < N; i++) {
    visitList[i].fill(false);
  }

  for(let i = 0; i < N ; i++){
    for(let j = 0; j < N; j++){
      if(list[i][j] > k && !visitList[i][j]){
        dfs([i,j], k, visitList);
        safeCount += 1;
      }
    }
  }
    
  if(maxSafeCount < safeCount) maxSafeCount = safeCount;
}

console.log(maxSafeCount);

