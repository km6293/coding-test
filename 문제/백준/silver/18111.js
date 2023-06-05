// 풀이 1.

// // let input = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split("\n");
// let input = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");

// let [N, M, B] = input.shift().split(' ').map(Number);

// // 높이에 대한 최소, 최댓값
// let [min, max] = [256, 0];
// let ground = input.map(e => e.split(' ').map(Number));
// ground.forEach(e => e.forEach(r => {
//   if(r > max) max = r;
//   if(r < min) min = r; 
// }))

// // 시간, 높이 
// let [time, height] = [Number.MAX_SAFE_INTEGER, 0];
// for(let i = min; i <= max; i++){
//   let [useTime , block] = [0, B];
//   let [over, under] = [[],[]];
//   ground.forEach(e => e.forEach(r => {
//     if(r > i) over.push(r);
//     else if(r < i) under.push(r);
//   }))

//   over.forEach(e => {
//     useTime += 2 * (e - i);
//     block += (e - i);
//   })

//   under.forEach(e => {
//     useTime += 1 * (i - e);
//     block -= (i - e);
//   })

//   if(block >= 0 && useTime <= time){
//     time = useTime;
//     height = i;
//   }
// }

// console.log(time, height);



// 풀이 2

let input = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split("\n");
// let input = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");

let [N, M, B] = input.shift().split(' ').map(Number);
let ground = input.map(e => e.split(' ').map(Number));

// 시간, 높이 
let [time, height] = [Number.MAX_SAFE_INTEGER, 0];
for(let i = 0; i <= 256; i++){
  let [useTime , block] = [0, B];
  ground.forEach(e => e.forEach(r => {
    if(r > i) {
      useTime += 2 * (r - i);
      block += (r - i);
    }else{
      useTime += 1 * (i - r);
      block -= (i - r);
    }
  }))
  if(block >= 0 && useTime <= time){
    time = useTime;
    height = i;
  }
}

console.log(time, height);