let [n, ...input] = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split("\n");
// let [n, ...input] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");

const [R, C, T] = n.split(' ').map(Number);
const airPurifierCoord = [];
input = input.map(row => row.split(' ').map(Number))

for(let i = 0; i < R; i++){
  if(input[i][0] === -1) airPurifierCoord.push(i)
}

const ny = [0, 0, -1, 1];
const nx = [1, -1, 0, 0];

// 미세먼지 확산
const dustDiffusion = () => {
  let originInput = input.map(row => [...row]);
  
  for(let i = 0; i < R; i++){
    for(let j = 0; j < C; j++){
      if(originInput[i][j] >= 5){

        const value = Math.floor(originInput[i][j] / 5);
        let cnt = 0;

        for(let k = 0; k < 4; k++){
          const my = i + ny[k];
          const mx = j + nx[k];

          if(my >= 0 && my < R && mx >= 0 && mx < C && input[my][mx] !== -1){
            input[my][mx] += value
            cnt += 1;
          }
        }        
        input[i][j] -= cnt * value;
      }
    }
  }


}

// 공기청정기 작동
const airPurifierWork = () => {
  const [up, bottom] = airPurifierCoord;

  for(let i = up-1; i > 0; i--) {
    input[i][0] = input[i-1][0];
  }
  for(let i = 0; i < C-1; i++) {
    input[0][i] = input[0][i+1];
  }
  for(let i = 0; i < up; i++) {
    input[i][C-1] = input[i+1][C-1];
  }
  for(let i = C-1; i > 1; i--) {
    input[up][i] = input[up][i-1];
  }
  input[up][1] = 0;

  for(let i = bottom+1; i < R-1; i++) {
    input[i][0] = input[i+1][0];
  }
  for(let i = 0; i < C-1; i++) {
    input[R-1][i] = input[R-1][i+1];
  }
  for(let i = R-1; i > bottom; i--) {
    input[i][C-1] = input[i-1][C-1];
  }
  for(let i = C-1; i > 1; i--) {
    input[bottom][i] = input[bottom][i-1];
  }
  input[bottom][1] = 0;
}


for(let i = 0; i < T; i++){
  dustDiffusion()
  airPurifierWork()
}

let sum = 0;

for(let i = 0; i < R; i++){
  for(let j = 0; j < C; j++){
    sum += input[i][j]
  }
}

console.log(sum+2)
