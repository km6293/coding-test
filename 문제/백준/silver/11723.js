let [n, ...input] = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split("\n");
// let [n, ...input] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");

let [setArr, rArr] = [[],[]];
const all = Array.from({ length: 20 }, (_, index) => index + 1);

input.forEach(e => {
  let [order, num] = e.split(' ');
  if(num == undefined){
    setArr = order == 'all' ? [...all] : [];
  }else{
    num = parseInt(num);
    let chk = setArr.indexOf(num);

    if(order == 'add' && chk == -1)setArr.push(num);
    else if(order == 'remove' && chk != -1) setArr.splice(chk,1);
    else if(order == 'check') rArr.push(chk == -1 ? 0 : 1)
    else if(order == 'toggle') chk == -1 ? setArr.push(num) : setArr.splice(chk,1);
  }
})

console.log(rArr.join('\n'));
