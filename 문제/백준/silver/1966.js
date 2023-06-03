let [n, ...input] = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split("\n");
// let [n, ...input] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");

for(let i = 0; i < n; i++){
  let [listNum, importance] = input[i*2].split(' ').map(e => parseInt(e));
  let fifoList = input[(i*2)+1].split(' ').map(e => parseInt(e));
  let fifoNumList = [...Array(fifoList.length)].map((e,i) => parseInt(i));
  let cnt = 1;
  while(true){
    let listShiftNum = fifoList.shift();
    let listNumShiftNum = fifoNumList.shift();

    // 현재값이 max이면서, 찾고자 하는 인덱스 일 경우 => console 로 끝

    // 현재값이 max이면서, 찾고자 하는 인덱스가 아닐 경우 => 삭제, cnt += 1

    // 현재값이 max가 아니면서, 찾고자 하는 인덱스일 경우 => 넘기기

    // 현재값이 max가 아니면서, 찾고자 하는 인덱스가 아닐 경우 => 넘기기
  }
}
