// let input = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split("\n");
let input = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");
input.shift();

let deque = [];
let list = [];
for(let i = 0; i < input.length; i++){
  let [a,b] = input[i].split(' ');
  if(b != undefined) b = parseInt(b);

  if(b == undefined){
    if(a == 'pop_front'){
      list.push(deque.length == 0 ? -1 : deque.shift());
    }else if(a == 'pop_back'){
      list.push(deque.length == 0 ? -1 : deque.pop());
    }else if(a == 'size'){
      list.push(deque.length);
    }else if(a == 'empty'){
      list.push(deque.length == 0 ? 1 : 0);
    }else if(a == 'front'){
      list.push(deque.length == 0 ? -1 : deque[0]);
    }else if(a == 'back'){
      list.push(deque.length == 0 ? -1 : deque[deque.length-1]);
    }
  }else{
    if(a == 'push_front'){
      deque.unshift(b);
    } else if(a == 'push_back'){
      deque.push(b)
    }
  }
}

console.log(list.join('\n'));