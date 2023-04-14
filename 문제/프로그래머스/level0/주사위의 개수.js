function solution(box, n){
  let val = 1;
  box.map(e => parseInt(e / n)).map(r => val *= r);
  return val 
}

console.log(solution([10, 8, 6], 3), 12)
