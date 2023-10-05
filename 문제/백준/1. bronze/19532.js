let [a,b,c,d,e,f] = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split(' ').map(Number);
// let [a,b,c,d,e,f] = require('fs').readFileSync("/dev/stdin").toString().trim().split(' ').map(Number);

// 값이 0일 경우가 있다.. 
// let y = ((c * d) - (f * a)) / ((b * d) - (e * a));
// let x = ((c * e) - (f * b)) / ((e * a) - (b * d));

for(let i = -999; i <= 999; i++){
  for(let j = -999; j <= 999; j++){
    if( (a * i) + (b * j) === c && (d * i) + (e * j) === f ){
      console.log(i, j);
      return;
    }
  }
}

console.log(x, y);