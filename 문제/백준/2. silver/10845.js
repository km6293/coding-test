let input = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split('\n');
// let input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n');

class Queue{
  constructor(){
    this.queue = [];
    this.frontValue = 0;
    this.rearValue = 0;
  }
  push(value){
    this.queue[this.rearValue++] = value;
  }
  pop(){
    const value = this.queue[this.frontValue];
    if(value === undefined) return -1;
    delete this.queue[this.frontValue];
    this.frontValue += 1;
    return value;
  }
  size(){
    return this.rearValue - this.frontValue;
  }
  empty(){
    return this.frontValue === this.rearValue ? 1 : 0;
  }
  front(){
    return this.queue[this.frontValue] === undefined ? -1 : this.queue[this.frontValue];
  }
  back(){
    return this.queue[this.rearValue-1] === undefined ? -1 : this.queue[this.rearValue-1];
  }
}


input = input.map(e => e.trim());
const N = input.shift();

let queue = new Queue();
let results = [];

for(let i = 0; i < N; i++){
  let [order, number] = input[i].split(' ');
  if(order === 'push'){
    queue.push(+number)
  }else if(order === 'pop'){
    results.push(queue.pop());
  }else if(order === 'size'){
    results.push(queue.size());
  }else if(order === 'empty'){
    results.push(queue.empty());
  }else if(order === 'front'){
    results.push(queue.front());
  }else if(order === 'back'){
    results.push(queue.back());
  }
}

console.log(results.join('\n'));