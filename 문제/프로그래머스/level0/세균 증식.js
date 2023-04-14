// function solution(n, t){
//   return n * Math.pow(2, t)
// }


function solution(n, t) {
  return n << t;
}

console.log(solution(3, 5))

// (3,5) -> 11 => 1100000 -> 32 + 64 => 96