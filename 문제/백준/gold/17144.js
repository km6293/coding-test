let [n, ...input] = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split("\n");
// let [n, ...input] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");


// 1. 기본 세팅
let [col, row, time] = n.split(' ').map(Number);
let arr = [...input].map(e => e.split(' ').map(Number));
let airCleaner = [];
arr.forEach((e,i) => e.forEach((r,p) => {if(r == -1) airCleaner.push([i,p])}))

// 2. time 초 만큼 확산 진행

// 동 서 남 북
let dy = [0, 0, -1, 1];
let dx = [1, -1, 0, 0];


for(let r = 0; r < time; r++){
  // 확산될 arr
  let diffusionArr = new Array(col).fill(0).map(() => new Array(row).fill(0));

  // 확산 진행
  arr.forEach((a,i) => {
    a.forEach((b,k) => {
      if(b > 4){
        let diffusion = 0;
        for(let m = 0 ; m < 4; m++){
          let my = i + dy[m];
          let mx = k + dx[m];
          // 동서남북 정상 체크
          if(my >= 0 && my < col && mx >= 0 && mx < row){
            // 확산된 곳이 공기 청정기인지 체크
            if((airCleaner[0][0] != my && airCleaner[0][1] != mx) && (airCleaner[1][0] != my && airCleaner[1][1] != mx)){
              diffusion += Math.floor(b/5);
              diffusionArr[my][mx] += Math.floor(b/5);
            }
          }
        }
        arr[i][k] -= diffusion;
        // 확산 된 리스트와 다시 더하기
        diffusionArr[i][k] += arr[i][k];
      }
    })
  })

  // 옮기기 && 공기청정기 설치
  arr = diffusionArr.map(e => [...e]);
  arr[airCleaner[0][0]][airCleaner[0][1]] = -1;
  arr[airCleaner[1][0]][airCleaner[1][1]] = -1;
}

// 3. time 초 뒤 바람 진행

// topWind
for(let i = 0; i < airCleaner[1][0]; i++){
  for(let r = 0; r < row; r++){

    let airMaxHeight = airCleaner[0][0];
    let airMaxWidth = row-1;

    // 값이 있을 경우, 공기청정기 아닐때 진행
    if(arr[i][r] > 0){
      // 바람이 부는 곳 (높이는 0이거나, 공기청정기 높이) (가로는 0이거나 끝)
      if((i == 0 || i == airMaxHeight) || (r == 0 || r == airMaxWidth)){

        let length = time;
        let [ny, nx] = [i, r];

        // 공기청정기의 시작1
        if(ny == airMaxHeight && length > 0){
          if(nx + length > airMaxWidth){
            length = length + nx - airMaxWidth;
            nx = airMaxWidth;
          }else{
            nx = nx + length;
            length = 0;
          }
        }
        
        // 공기청정기의 시작2
        if(nx == airMaxWidth && length > 0){
          if(ny - length < 0){
            length = length - ny;
            ny = 0;
          }else{
            ny = ny - length;
            length = 0;
          }
        }
        
        // 공기청정기의 시작3
        if(ny == 0 && length > 0){
          if(nx - length < 0){
            length = length - nx;
            nx = 0;
          }else{
            nx = nx - length;
            length = 0;
          }
        }
        
        // 공기청정기의 시작4
        if(nx == 0 && length > 0){
          ny = ny + length;
        }

        // 넘어가면 없애버리기
        if((ny > airMaxHeight) || (ny == airMaxHeight && nx == 0)){
          arr[i][r] = 0;
        }
      }
    }
  }
}

// bottomWind
for(let i = airCleaner[1][0]; i < col; i++){
  for(let r = 0; r < row; r++){

    let airMinHeight = airCleaner[1][0];
    let airMaxHeight = col -1;
    let airMaxWidth = row-1;

    // 값이 있을 경우, 공기청정기 아닐때 진행
    if(arr[i][r] > 0){
      // 바람이 부는 곳 (높이는 0이거나, 공기청정기 높이) (가로는 0이거나 끝)
      if((i == airMinHeight || i == airMaxHeight) || (r == 0 || r == airMaxWidth)){
        
        let length = time;
        let [ny, nx] = [i, r];

        // 공기청정기의 시작1
        if(ny == airMinHeight && length > 0){
          if(nx + length > airMaxWidth){
            length = length + nx - airMaxWidth;
            nx = airMaxWidth;
          }else{
            nx = nx + length;
            length = 0;
          }
        }

        // 공기청정기의 시작2
        if(nx == airMaxWidth && length > 0){
          if(ny + length > airMaxHeight){
            length = ny + length - airMaxHeight;
            ny = airMaxHeight;
          }else{
            ny = ny + length;
            length = 0;
          }
        }

        // 공기청정기의 시작3
        if(ny == airMaxHeight && length > 0){
          if(nx - length < 0){
            length = length - nx;
            nx = 0;
          }else{
            nx = nx - length;
            length = 0;
          }
        }

        // 공기청정기의 시작4
        if(nx == 0 && length > 0){
          ny = ny - length;
        }

        // 넘어가면 없애버리기
        if((ny < airMinHeight) || (ny == airMinHeight && nx == 0)){
          arr[i][r] = 0;
        }
      }
    }
  }
}

// 4. 남아있는 미세먼지의 양을 출력
let total = 0;
arr.forEach(e => e.forEach(r => {
  if(r > 0) total += r;
}))

console.log(total)