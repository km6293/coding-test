// let [n, ...input] = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split("\n");
// let [n, ...input] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");

// for(let i = 0; i < n; i++){
//   let importance = parseInt(input[i*2].split(' ')[1]);
//   let fifoList = input[(i*2)+1].split(' ').map(e => parseInt(e));
//   let fifoNumList = [...Array(fifoList.length)].map((e,i) => parseInt(i));
//   let cnt = 1;
//   while(true){
//     let listShiftNum = fifoList.shift();
//     let listNumShiftNum = fifoNumList.shift();
//     let fVal = fifoList.find(e => e > listShiftNum);
//     // 현재값이 max이면서, 찾고자 하는 인덱스 일 경우 => console 로 끝
//     if(fVal == undefined && listNumShiftNum == importance){
//       console.log(cnt);
//       break;
//     // 현재값이 max이면서, 찾고자 하는 인덱스가 아닐 경우 => 삭제, cnt += 1
//     }else if(fVal == undefined && listNumShiftNum != importance){
//       cnt += 1;
//     // 현재값이 max가 아니면서, 찾고자 하는 인덱스일 경우 => 넘기기, 다시 넣어주기
//     }else if(fVal != undefined && listNumShiftNum == importance){
//       fifoList.push(listShiftNum);
//       fifoNumList.push(listNumShiftNum);
//       // 현재값이 max가 아니면서, 찾고자 하는 인덱스가 아닐 경우 => 넘기기, 다시 넣어주기
//     }else if(fVal != undefined && listNumShiftNum != importance){
//       fifoList.push(listShiftNum);
//       fifoNumList.push(listNumShiftNum);
//     }
//   }
// }





let [n, ...input] = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split("\n");
// let [n, ...input] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");
input = input.map(e => e.trim());
class Queue{
  constructor(sortList){
    this.queue = [];
    this.maxList = sortList;
    this.front = 0;
    this.rear = 0;
  }

  enqueue(value){
    this.queue[this.rear++] = value;
  }

  dequeue(){
    const value = this.queue[this.front];
    delete this.queue[this.front];
    this.front += 1;
    return value;
  }

  max(){
    return this.maxList[this.maxList.length-1];
  }

  pop(){
    this.maxList.pop()
  }
  
}

let q;
let result = [];

for(let i = 0; i < +n; i++){
  let [N, M] = input[i*2].split(' ').map(Number);
  let priorityList = input[(i*2)+1].split(' ').map(Number);
  
  q = new Queue(priorityList.sort((a,b) => a - b));
  priorityList.forEach((v,i) => q.enqueue([v,i]));
  let cnt = 0; 

  while(true){

    let max = q.max();
    let [value, index] = q.dequeue();
    if(max === value && index === M){
      q.pop()
      break;
    }
    if(max === value){
      cnt += 1;
      q.pop()
    }else{
      q.enqueue([value,index]);
    }
  }
  result.push(cnt);
}

console.log(result.join('\n'))