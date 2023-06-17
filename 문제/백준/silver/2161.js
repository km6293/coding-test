const n = parseInt(require('fs').readFileSync(__dirname + "/../input.txt").toString().trim());
// const n = parseInt(require('fs').readFileSync("/dev/stdin").toString().trim());

let [nArr, rArr] = [[],[]];
for(let i = 1; i <= n; i++) nArr.push(i);
nArr.reverse();

while(nArr.length != 1){
  rArr.push(nArr.pop());    
  nArr.unshift(nArr.pop());
}

console.log(...rArr, ...nArr);


