const n = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim();
// const n = require('fs').readFileSync("/dev/stdin").toString().trim();

let total = 0;
for(let i = 1 ; i <= n.length; i++){
  if(n.length ==  i){
    total += (parseInt(n) - parseInt('1'+'0'.repeat(i-1)) + 1) * i
  }else{
    total += parseInt('9' + '0'.repeat(i-1)) * i;    
  }
}
console.log(total);