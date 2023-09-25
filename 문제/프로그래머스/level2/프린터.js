function solution(arr, num){

  let nArr = new Array(arr.length).fill(0);
  nArr[num] = -1 
  let sArr = [...arr].sort((a,b) => b - a);
  let cnt = 1;
  
  while(true){
    
    let fIndex = arr.findIndex(e => e == sArr[0]);
    arr = [...arr.slice(fIndex, arr.length) , ...arr.slice(0, fIndex)]
    nArr = [...nArr.slice(fIndex, nArr.length) , ...nArr.slice(0, fIndex)]
    
    if(nArr[0] == -1){
      break;
    }else{
      arr.shift()
      nArr.shift()
      sArr.shift()
      cnt += 1;
    }
    
  }
    
  return cnt
}

// 2번째 풀이
// class Queue {
//   constructor(){
//     this.queue = [];
//     this.front = 0;
//     this.rear = 0;
//     this.cnt = 0;
//   }

//   enqueue(value, chk){
//     this.queue[this.rear++] = value;
//     if(chk) this.cnt -= 1;
//   }

//   dequeue(){
//     const value = this.queue[this.front];
//     delete this.queue[this.front];
//     this.front += 1;
//     this.cnt += 1;
//     return value;
//   }
// }

// function solution(arr, num){

//   let queue = new Queue()
//   arr.forEach((e,i) => queue.enqueue([e, i], false));
//   let sArr = [...arr].sort((a,b) => a - b);

//   while(true){
//     let [value, index] = queue.dequeue();
//     let maxValue = sArr[sArr.length-1];
//     if(index === num && value == maxValue) break;
//     maxValue === value ? sArr.pop() : queue.enqueue([value, index], true);
//   }
//   return queue.cnt;

// }

// console.log(solution([2, 1, 3, 2], 2), 1)
// console.log(solution([1, 2, 3], 2), 1)
// console.log(solution([1, 1, 9, 1, 1, 1], 0), 5)
// console.log(solution([1,5,4,1], 3), 3)
console.log(solution([5,5,4,1], 0), 1)
// console.log(solution([1,1,1,1], 3), 4)

