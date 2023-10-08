// let [n, ...input] = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split("\n");
let [n, ...input] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");

for(let i = 0; i < n; i++){
  let importance = parseInt(input[i*2].split(' ')[1]);
  let fifoList = input[(i*2)+1].split(' ').map(e => parseInt(e));
  let fifoNumList = [...Array(fifoList.length)].map((e,i) => parseInt(i));
  let cnt = 1;
  while(true){
    let listShiftNum = fifoList.shift();
    let listNumShiftNum = fifoNumList.shift();
    let fVal = fifoList.find(e => e > listShiftNum);
    // 현재값이 max이면서, 찾고자 하는 인덱스 일 경우 => console 로 끝
    if(fVal == undefined && listNumShiftNum == importance){
      console.log(cnt);
      break;
    // 현재값이 max이면서, 찾고자 하는 인덱스가 아닐 경우 => 삭제, cnt += 1
    }else if(fVal == undefined && listNumShiftNum != importance){
      cnt += 1;
    // 현재값이 max가 아니면서, 찾고자 하는 인덱스일 경우 => 넘기기, 다시 넣어주기
    }else if(fVal != undefined && listNumShiftNum == importance){
      fifoList.push(listShiftNum);
      fifoNumList.push(listNumShiftNum);
      // 현재값이 max가 아니면서, 찾고자 하는 인덱스가 아닐 경우 => 넘기기, 다시 넣어주기
    }else if(fVal != undefined && listNumShiftNum != importance){
      fifoList.push(listShiftNum);
      fifoNumList.push(listNumShiftNum);
    }
  }
}
