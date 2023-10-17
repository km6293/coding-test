let list = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split("\n");
// let list = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");
list.pop()

let result = [];
const [inType, outType]  = [['(','['], [')',']']];

for(let i = 0 ; i < list.length; i++){

  let chk = true
  let stack = [];

  for(let j = 0; j < list[i].length; j++){
    let value = list[i][j];
    if(inType.includes(value)) stack.push(value);
    else if(outType.includes(value)){
      if(stack.length === 0){
        chk = false;
        break;
      }
      let fIndex = outType.indexOf(value);
      if(stack.pop() !== inType[fIndex]){
        chk = false;
        break;
      }
    }

  }
  if(stack.length !== 0) chk = false;
  result.push(chk ? 'yes' : 'no');
}

console.log(result.join('\n'));