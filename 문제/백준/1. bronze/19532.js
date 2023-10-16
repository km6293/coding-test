let [a,b,c,d,e,f] = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split(' ').map(Number);
// let [a,b,c,d,e,f] = require('fs').readFileSync("/dev/stdin").toString().trim().split(' ').map(Number);

// 조건 -999 ~ 999이기 때문에 값이 0일 경우가 있다. 

// 풀이 1. 완전탐색 (레이블문)
// loop : for(let i = -999; i <= 999; i++){
//   for(let j = -999; j <= 999; j++){
//     if( (a * i) + (b * j) === c && (d * i) + (e * j) === f ){
//       console.log(i, j);
//       break loop;
//     }
//   }
// }


// 풀이 2. 연립방정식
// 띄워쓰기를 안 쓰면 틀린다.
// let y = ((c * d) - (f * a)) / ((b * d) - (e * a));
// let x = ((c * e) - (f * b)) / ((e * a) - (b * d));
// console.log(x+' '+y) 

// const [a,b,c,d,e,f]=(require('fs').readFileSync(__dirname + "/../input.txt")+'').split(' ');
// console.log(`${(c*e-b*f)/(a*e-b*d)} ${(a*f-c*d)/(a*e-b*d)}`);


