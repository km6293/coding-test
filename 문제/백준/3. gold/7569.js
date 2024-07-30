let input = require('fs').readFileSync(__dirname+'/../input.txt').toString().trim().split('\n');
// let input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n');

const [M, N, H] = input.shift().split(' ').map(Number);
const tomatoList = Array.from({length: H}, () => []);
let tomatoCheckList = new Set();

const dx = [1, -1, 0, 0, 0, 0];
const dy = [0, 0, 1, -1, 0, 0];
const dh = [0, 0, 0, 0, 1, -1];

for(let i = 0; i < H; i++){
  for(let j = 0; j < N; j++){
    const tomatoRows = input[(i * N) + j].split(' ').map(Number);
    tomatoList[i].push(tomatoRows);
    for(let k = 0; k < tomatoRows.length; k++){
      if(tomatoRows[k] === 1){
        tomatoCheckList.add([i, j, k]);
      }
    }
  }
}

let day = 0

while(tomatoCheckList.size !== 0){

  const newTomatoCheckList = new Set();
  tomatoCheckList.forEach(([i, j, k]) => {
    for(let n = 0; n < 6; n++){
      const nx = dx[n] + k;
      const ny = dy[n] + j;
      const nh = dh[n] + i;

      if(nx >= 0 && ny >= 0 && nh >= 0 && nx < M && ny < N && nh < H && tomatoList[nh][ny][nx] === 0){
        newTomatoCheckList.add([nh, ny, nx]);
        tomatoList[nh][ny][nx] = 1;
      }
    }

    tomatoCheckList = newTomatoCheckList;
  })

  day += 1;
}


let check = false;

for(let i = 0; i < H; i++){
  for(let j = 0; j < N; j++){
    for(let k = 0; k < M; k++){
      if(tomatoList[i][j][k] === 0) check = true;
    }
  }
}

console.log(check ? -1 : day - 1)
