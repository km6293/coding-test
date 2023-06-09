let [n, ...input] = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split("\n");
// let [n, ...input] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");


let [col, row, time] = n.split(' ').map(Number);
let arr = [...input].map(e => e.split(' ').map(Number));
let airCleaner = [];
arr.forEach((e,i) => e.forEach((r,p) => {if(r == -1) airCleaner.push([i,p])}));

let dy = [0, 0, -1, 1];
let dx = [1, -1, 0, 0];

for(let i = 0; i < time; i++){
  let diffusionArr = new Array(col).fill(0).map(() => new Array(row).fill(0));

  for(let h = 0; h < col; h++){
    for(let w = 0; w < row; w++){
      if(arr[h][w] > 0){
        if(arr[h][w] > 4){

          let val = arr[h][w];
          let valDiv = Math.floor(val/5);

          for(let m = 0; m < 4; m++){
            let [ my , mx ] = [ h + dy[m], w + dx[m] ];

            if(my >= 0 && mx >= 0 && my < col && mx < row){
              if(!(my == airCleaner[0][0] && mx == airCleaner[0][1]) && !(my == airCleaner[1][0] && mx == airCleaner[1][1])){
                val -= valDiv;
                diffusionArr[my][mx] += valDiv;
              }
            }
          }
          diffusionArr[h][w] += val;
        }else{
          diffusionArr[h][w] += arr[h][w];
        }
      }
    }
  }

  let locationList = [];
  let valueList = [];

  for(let h = 0; h < col; h++){
    for(let w = 0; w < row; w++){
      if(diffusionArr[h][w] > 0){
        if(h >= 0 && h < airCleaner[0][0] && w == 0) {
          locationList.push([h+1, w]);
          valueList.push(diffusionArr[h][w]);
          diffusionArr[h][w] = 0;
        }
        else if(h == 0 && w > 0 && w < row){
          locationList.push([h,w-1]);
          valueList.push(diffusionArr[h][w]);
          diffusionArr[h][w] = 0;
        }
        else if(w == row-1 && h > 0 && h <= airCleaner[0][0]){
          locationList.push([h-1,w]);
          valueList.push(diffusionArr[h][w]);
          diffusionArr[h][w] = 0;
        }
        else if(w > 0 && w < row-1 && h == airCleaner[0][0]) {
          locationList.push([h,w+1]);
          valueList.push(diffusionArr[h][w]);
          diffusionArr[h][w] = 0;
        }
        else if(h > airCleaner[1][0] && h < row && w == 0) {
          locationList.push([h-1,w]);
          valueList.push(diffusionArr[h][w]);
          diffusionArr[h][w] = 0;
        }
        else if(h == col-1 && w > 0 && w < row) {
          locationList.push([h,w-1]);
          valueList.push(diffusionArr[h][w]);
          diffusionArr[h][w] = 0;
        }
        else if(w == row-1 && h >= airCleaner[1][0] && h < col-1 ) {
          locationList.push([h+1,w]);
          valueList.push(diffusionArr[h][w]);
          diffusionArr[h][w] = 0;
        }
        else if(w > 0 && w < row-1 && h == airCleaner[1][0]) {
          locationList.push([h,w+1]);
          valueList.push(diffusionArr[h][w]);
          diffusionArr[h][w] = 0;
        }
      }
    }
  }

  for(let r = 0; r < locationList.length; r++){
    if((locationList[r][0] == airCleaner[0][0] && locationList[r][1] == airCleaner[0][1]) ||
       (locationList[r][0] == airCleaner[1][0] && locationList[r][1] == airCleaner[1][1])){
         diffusionArr[locationList[r][0]][locationList[r][1]] = 0;
       }else{
         diffusionArr[locationList[r][0]][locationList[r][1]] = valueList[r];
       }
  }
  
  arr = diffusionArr.map(e => [...e]);
  arr[airCleaner[0][0]][airCleaner[0][1]] = -1;
  arr[airCleaner[1][0]][airCleaner[1][1]] = -1;
}


let total = 0;
arr.forEach(e => e.forEach(r => {if(r > 0) total += r}));
console.log(total);
