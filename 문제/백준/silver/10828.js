// const input = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");
const input = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split("\n");

let [list, rList] = [[],[]];
for(let i = 1; i < input.length; i++){
   
  [order ,num] = input[i].split(' ');

  if(num !== undefined) list.push(num)
  else{
    let pVal = undefined;
    if(order === 'pop') pVal = list.pop();
    else if(order === 'top')pVal = list[list.length-1];
    else if(order === 'size')pVal = list.length;
    else if(order === 'empty')pVal = list.length === 0 ? 1 : 0;
    
    rList.push(pVal == undefined ? -1 : pVal);
  }
}
console.log(rList.join('\n'));