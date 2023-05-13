// 풀이 1 => 풀이 방식보다는 이상하게 작성 한것같아서 다시 진행

// function solution(arr){

//   let dx = [0,0,-1,1];
//   let dy = [1,-1,0,0];
//   let [location,E,L] = [[],[],[]];
//   let nArr = [];
//   arr.forEach((e,i) => {
//     let val = [];
//     for(let r = 0; r < e.length; r++) {
//       val.push(e[r]);
//       if(e[r] == 'S') location.push(i,r);
//       if(e[r] == 'E') E.push(i,r);
//       if(e[r] == 'L') L.push(i,r);
//     }
//     nArr.push(val)
//   })
//   let rArr = [...nArr];
//   let qArr = [...nArr];
//   let rQueue = [[...location,0]];
//   let rVal = 0;
//   while(rQueue.length){
//     let [y,x,cnt] = rQueue.shift();
//     if(y == L[0] && x == L[1]){
//       rVal = cnt;
//       break;
//     }
//     for(let i = 0; i < 4; i++){
//       let my = y + dy[i];
//       let mx = x + dx[i];
      
//       if(my >= 0 && my <= rArr.length-1 && mx >= 0 && mx <= rArr[0].length-1 && rArr[my][mx] != 'X'){
//         rQueue.push([my,mx,cnt+1]);
//         rArr[y][x] = 'X';
//       }
//     }
//   }
//   if(rVal == 0) return -1
//   console.log(qArr)
//   let nVal = 0;
//   let nQueue = [[...L,0]];
//   while(nQueue.length){
//     let [y,x,cnt] = nQueue.shift();
//     if(y == E[0] && x == E[1]){
//       nVal = cnt;
//       break;
//     }
//     for(let i = 0; i < 4; i++){
//       let my = y + dy[i];
//       let mx = x + dx[i];
      
//       if(my >= 0 && my <= qArr.length-1 && mx >= 0 && mx <= qArr[0].length-1 && qArr[my][mx] != 'X'){
//         nQueue.push([my,mx,cnt+1]);
//         qArr[y][x] = 'X';
//       }
//     }
//   }
//   return nVal == 0 ? -1 : nVal + rVal
// }

// console.log(solution(["SOOOL","XXXXO","OOOOO","OXXXX","OOOOE"]), 16)
// console.log(solution(["LOOXS","OOOOX","OOOOO","OOOOO","EOOOO"]), -1)

function solution(arr){

  let [start,end, lever] = [[],[],[]];
  let dx = [1, -1, 0, 0];
  let dy = [0, 0, -1, 1];
  let [rArr, nArr] = [[],[]];
  
  for(let i = 0; i < arr.length; i++){
    let pArr = [];
    for(let r = 0; r < arr[i].length; r++){
      pArr.push(arr[i][r]);
      if(arr[i][r] == 'S') start = [i, r]; 
      if(arr[i][r] == 'E') end = [i, r]; 
      if(arr[i][r] == 'L') lever = [i, r]; 
    }
    rArr.push([...pArr]);
    nArr.push([...pArr]);
  }
  
  let rQueue = [];
  let rCnt = -1;
  rQueue.push([...start, 0]);
  while(rQueue.length){
    let [x,y,cnt] = rQueue.shift();
    for(let i = 0 ; i < 4; i++){
      let mx = x + dx[i];
      let my = y + dy[i];
      if(mx >= 0 && my >= 0 && mx <= rArr.length-1 && my <= rArr[0].length-1 && rArr[mx][my]!='X'){
        if(rArr[mx][my] == 'L') rCnt = cnt+1;
        rQueue.push([mx,my,cnt+1]);
        rArr[mx][my] = "X";
      }
    }
    if(rCnt != -1) break;
  }
  if(rCnt == -1) return -1

  let nQueue = [];
  let nCnt = -1;
  nQueue.push([...lever, 0]);
  while(nQueue.length){
    let [x,y,cnt] = nQueue.shift();
    for(let i = 0 ; i < 4; i++){
      let mx = x + dx[i];
      let my = y + dy[i];
      if(mx >= 0 && my >= 0 && mx <= nArr.length-1 && my <= nArr[0].length-1 && nArr[mx][my] != "X" ){
        if(nArr[mx][my] == 'E') nCnt = cnt+1;
        nQueue.push([mx,my,cnt+1]);
        nArr[mx][my] = "X";
      }
    }
    if(nCnt != -1) break;
  }
  if(nCnt == -1) return -1

  return rCnt + nCnt
}

// 축약
function solution(arr) {
  const dx = [1, -1, 0, 0];
  const dy = [0, 0, -1, 1];
  let [rCnt, nCnt] = [-1, -1];

  const bfs = (queue, cnt, targetArr, target) => {
    while (queue.length) {
      const [x, y, c] = queue.shift();
      for (let i = 0; i < 4; i++) {
        const mx = x + dx[i];
        const my = y + dy[i];
        if ( mx >= 0 && my >= 0 && mx <= targetArr.length - 1 && my <= targetArr[0].length - 1 && targetArr[mx][my] !== 'X' ) {
          if (targetArr[mx][my] === target) cnt = c + 1;
          queue.push([mx, my, c + 1]);
          targetArr[mx][my] = 'X';
        }
      }
      if (cnt !== -1) break;
    }
    return cnt;
  };

  const rArr = arr.map((row) => [...row]);
  const nArr = arr.map((row) => [...row]);
  const [start, end, lever] = [[],[],[]];

  for (let i = 0; i < arr.length; i++) {
    for (let r = 0; r < arr[i].length; r++) {
      if (arr[i][r] === 'S') start.push(i, r);
      if (arr[i][r] === 'E') end.push(i, r);
      if (arr[i][r] === 'L') lever.push(i, r);
    }
  }

  const rQueue = [[...start, 0]];
  const nQueue = [[...lever, 0]];

  rCnt = bfs(rQueue, rCnt, rArr, 'L');
  nCnt = bfs(nQueue, nCnt, nArr, 'E');

  if (rCnt === -1 || nCnt === -1) return -1;

  return rCnt + nCnt;
}



// console.log(solution(
//   ["SOEOL"
//   ,"XXXXO"
//   ,"OOOOO"
//   ,"OXXXX"
//   ,"OOOOO"]), 6)
// console.log(solution(["SLEOX", "XXXXO", "OOOOO", "OXXXX", "OOOOO"]), 2)
// console.log(solution(["SELOX", "XXXXO", "OOOOO", "OXXXX", "OOOOO"]), 3)
// console.log(solution(["SLXOX", "EXXXO", "OOOOO", "OXXXX", "OOOOO"]), 3)
console.log(solution(["SXXOX", "EXXXL", "OOXOO", "OXXXX", "OOOOO"]), -1)
