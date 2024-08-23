let [N, ...list] = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split("\n");
// let [N, ...list] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");

const dy = [-1, 0, 0, 1];
const dx = [0, -1, 1, 0];

const visitOriginList = Array.from({length: N}, () => Array.from({length:N}).fill(0))
let shirkLocation = [0, 0];
let shirkSize = 2;
let shirkExp = 0;

N = Number(N);
list = list.map((row, i) => {
  return row.split(' ').map(Number).map((col, j) => {
    if(col === 9) shirkLocation = [i, j]
    return col
  })
})

let sum = 0
let aStack = [[...shirkLocation]]

while(aStack.length > 0){
  let visitList = visitOriginList.map(row => [...row])
  let [y, x] = aStack.shift();

  let bStack = [[y,x,0]]
  let cStack = []
  let minLocation = []

  while(bStack.length > 0){
    const [sy, sx, cnt] = bStack.shift()
    visitList[sy][sx] = 9

    for(let i = 0; i < 4; i++){
      const my = dy[i] + sy;
      const mx = dx[i] + sx;
    
      if(my >= 0 && mx >= 0 && my < N && mx < N && list[my][mx] <= shirkSize && visitList[my][mx] !== 9){
        if(list[my][mx] === shirkSize || list[my][mx] === 0){
          cStack.push([my ,mx, cnt+1])
        }else{
          minLocation.push([my, mx, cnt+1])
        }
        visitList[my][mx] = 9
      }
    }

    if(minLocation.length === 0 && bStack.length === 0){
      cStack.forEach(stack => bStack.push(stack))
      cStack.length = 0
    };
  }

  if(minLocation.length > 0){
    minLocation.sort((a,b) => {
      const [ay, ax, acnt] = a;
      const [by, bx, bcnt] = b;
    
      if(ay < by){
        return ay - by
      }else if(ay === by && ax < bx){
        return ax - bx    
      }
    })
    
    const [cy, cx, cnt] = minLocation[0];
    list[y][x] = 0;
    list[cy][cx] = 9
    aStack.push([cy,cx])
    sum += cnt
    shirkExp += 1;
    if(shirkExp === shirkSize){
      shirkExp = 0;
      shirkSize += 1
    }
  }
}

console.log(sum)

