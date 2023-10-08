let input = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split("\n");
// let input = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");
input.shift();

// 첫번째 시도

// let value = 100 * input.length;
// for(let i = 0; i < input.length-1; i++){
//   let [aw, ah] = input[i].split(' ').map(e => parseInt(e));
//   for(let r = i + 1; r < input.length; r++){
//     let [bw, bh] = input[r].split(' ').map(e => parseInt(e));
//     let [w, h] = [0, 0];
//     if((aw <= bw && aw + 10 >= bw) || aw <= bw + 10 && aw + 10 >= bw + 10) w = 10 - Math.abs(aw - bw);
//     if((ah <= bh && ah + 10 >= bh) || ah <= bh + 10 && ah + 10 >= bh + 10) h = 10 - Math.abs(ah - bh);
//     value -= w * h;
//   }
// }
// console.log(value);

// 두번째 시도
let arr = Array.from(Array(100), () => Array(100).fill(0));
for(let i = 0 ; i < input.length; i++){

  let [w, h] = input[i].split(' ').map(e => parseInt(e));
  for(let r = 0; r < 10; r++){
    for(let z = 0; z < 10; z++){
      arr[w + r][h + z] = 1;
    }
  }
}
let cnt = 0;
arr.forEach(e => cnt += e.filter(r => r == 1).length);
console.log(cnt);