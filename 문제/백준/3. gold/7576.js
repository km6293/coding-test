let [n, ...arr] = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split("\n");
// let [n, ...arr] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");

arr = arr.map(e => e.trim().split(' ').map(Number));

const [M, N] = n.split(' ').map(Number);
const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];

let stack = [];
arr.forEach((e, i) => {
  e.forEach((r, j) => {
    if(r === 1) stack.push([j, i]);
  })
})

let cnt = 0;
while(stack.length !== 0){
  const currentStack = [...stack];
  stack = [];
  for(let i = 0; i < currentStack.length; i++){
    const [x, y] = currentStack[i];

    for(let r = 0; r < 4; r++){
      let mx = x + dx[r];
      let my = y + dy[r];

      if(mx >= 0 && my >= 0 && mx < M && my < N && arr[my][mx] === 0){
        arr[my][mx] = 1;
        stack.push([mx, my]);
      }
    }
  }
  if(stack.length == 0) break;
  cnt += 1;
}

arr.forEach(e => {
  e.forEach(r => {
    if(r === 0) cnt = -1;
  })
})

console.log(cnt);




