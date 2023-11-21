let input = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split("\n");
// let input = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");
input = input.map(e => e.trim().split(' ').map(Number));

let arr = input.slice(0,5);
// 2차원 배열 -> 1차원 배열 (코드 보기 쉽게 하기 위해 진행)
let answer = input.slice(5).flatMap(r => r);
let cnt = 0;

for(let k = 0; k < answer.length; k++){
  for(let i = 0; i < 5; i++){
    let index = arr[i].indexOf(answer[k]);
    if(index !== -1){
      arr[i][index] = 'O'
      chkBingo(i, index);
      if(cnt >= 3){
        console.log(k+1);
        break;
      }
    }
  }
  if(cnt >= 3) break;
}

// 계속 전체 체크하는 것보다 특정 인덱스에 대한 것만 체크하는 것이 더 좋을 것 같아서 진행
function chkBingo(column, row){
  let chk = [5,5,5,5];
  let leftDiagonal = [[0,0],[1,1],[2,2],[3,3],[4,4]];
  let rightDiagonal = [[0,4],[1,3],[2,2],[3,1],[4,0]];
  let ld = leftDiagonal.some(e => e.every((v,i) => v === [column,row][i]))
  let rd = rightDiagonal.some(e => e.every((v,i) => v === [column,row][i]))

  for(let i = 0; i < 5; i++){
    if(arr[i][row] === 'O') chk[0] -= 1;
    if(arr[column][i] === 'O') chk[1] -= 1;
    if(ld && arr[leftDiagonal[i][0]][leftDiagonal[i][1]] === 'O') chk[2] -= 1; 
    if(rd && arr[rightDiagonal[i][0]][rightDiagonal[i][1]] === 'O') chk[3] -= 1; 
  }

  chk.forEach(e => {if(e === 0) cnt += 1;})  
}



