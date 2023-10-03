const N = parseInt(require('fs').readFileSync(__dirname + "/../input.txt").toString().trim());
// const N = parseInt(require('fs').readFileSync("/dev/stdin").toString().trim());

class Queue{
  constructor(list){
    this.queue = list;
    this.front = 0;
    this.rear = list.length;
  }

  inqueue(value){
    this.queue[this.rear++] = value;
  }

  dequeue(){
    const value = this.queue[this.front];
    delete this.queue[this.front];
    this.front += 1;
    return value;
  }

  remove(){
    delete this.queue[this.front];
    this.front += 1;
  }

  isOne(){
    return this.rear - this.front === 1;
  }
}

let list = Array.from({length : N}, (_, i) => i+1);
let queue = new Queue(list);

while(!queue.isOne()){
  queue.remove();
  queue.inqueue(queue.dequeue())
}

console.log(queue.queue[queue.front]);