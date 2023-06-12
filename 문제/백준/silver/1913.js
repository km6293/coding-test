const [n, r] = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split("\n").map(Number);
// const [n, r] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

// n제곱만큼 2차원배열 0으로 채움
let list = Array.from(new Array(n),  () => Array(n).fill(0));
list[(n - 1)/2][(n - 1)/2] = 1;

console.log(list)

// 현재 좌표, return할 좌표, 동서남북
let location = [(n - 1)/2, (n - 1)/2];
let resultLocation = [];
let nowDirection = 0;
let dy = [-1, 0, 1, 0];
let dx = [0, 1, 0, -1];

let [inc, incChk] = [1, 3];

for(let i = 1; i <= n**2; i++){
  
  // incChk -= 1;
  // if(i == (incChk - 1) / 2) {
  //   nowDirection += 1;
  // }
  // else if(incChk == 0){
  //   inc += 1;
  //   incChk = (inc * 2) + 1;
  //   nowDirection = nowDirection == 3 ? 0 : nowDirection + 1;
  // }
  
  // location[0] += dy[nowDirection];
  // location[1] += dx[nowDirection];

  // // 값 변경
  // list[location[0]][location[1]] = i;

  // // 원하는 값의 좌표
  // if(i == r) resultLocation = location; 
}




