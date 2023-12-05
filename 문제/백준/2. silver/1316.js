let list = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split("\n");
// let list = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");

let cnt = 0;
for(let i = 1; i < +list[0]+1; i++){
  let chkList = [];
  let chk = true;
  for(let j = 0; j < list[i].length; j++){
    if(chkList[j-1] !== list[i][j] && chkList.some(e => e === list[i][j]) ){
      chk = false;
      break;
    }else{
      chkList.push(list[i][j])
    }
  }
  if(chk) cnt += 1;
}

console.log(cnt)
