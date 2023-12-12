let N = +require('fs').readFileSync(__dirname + "/../input.txt").toString().trim()
// let N = +require('fs').readFileSync("/dev/stdin").toString().trim()

let val = 666;
let cnt = 1;
while(N !== cnt){
  val += 1;
  if(val.toString().includes('666')) cnt += 1;
}
console.log(val);
