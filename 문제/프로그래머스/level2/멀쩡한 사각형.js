function solution(w, h) {

  // 1. 정사각향일 경우
  if(w === h) return w*h - w;

  let [a,b] = [w,h];
  while(b != 0){
      let temp = a;
      a = b;
      b = temp % b;
  }
  let [c,d] = [w/a ,h/a];

  return (w * h) - (a * (c * d - (c - 1) * (d -1)))
}


// console.log(solution(8, 12), 80)
// console.log(solution(2, 2), 2)
// console.log(solution(1, 10000), 0)
// console.log(solution(7, 3), 12)
// console.log(solution(8, 3), 14)
// console.log(solution(3, 7), 12)
console.log(solution(100000000, 999999999), 99999998800000002)
// console.log(solution(5, 3), 8)
// console.log(solution(30,30))