const [n, r] = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split("\n").map(Number);
// const [n, r] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

// n제곱만큼 2차원배열 0으로 채움
let list = Array.from(new Array(n),  () => Array(n).fill(0));

// 현재 좌표, return할 좌표
let location = [0, 0];
let resultLocation = [];

// 남 동 북 서 (반시계방향)
let dy = [1, 0, -1, 0];
let dx = [0, 1, 0, -1];
let direction = 0;

for(let i = n**2; i > 0; i--){
  // 현재 좌표를 list를 변경 시킨다.
  list[location[0]][location[1]] = i;

  // 다음갈 곳이 벗어났거나 0이 아니라면
  if(location[0] + dy[direction] < 0 || location[1] + dx[direction] < 0 || location[0] + dy[direction] >= n || location[1] + dx[direction] >= n){
    direction = direction == 3 ? 0 : direction + 1;
  }else if(list[location[0] + dy[direction]][location[1] + dx[direction]] != 0){
    direction = direction == 3 ? 0 : direction + 1;
  }

  let ny = location[0] + dy[direction];
  let nx = location[1] + dx[direction];

  // 다음방향 결정
  location = [ny, nx];

  // 원하는 좌표 따로 빼두기
  if(i-1 == r) resultLocation.push(...location);
}

list.forEach(e => console.log(...e));
console.log(resultLocation[0] + 1, resultLocation[1] + 1);
