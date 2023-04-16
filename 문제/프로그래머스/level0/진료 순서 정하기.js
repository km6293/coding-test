function solution(arr){
  return arr.map(e => [...arr].sort((a,b) => b - a).findIndex(r => r == e)+1);
}

console.log(solution([30, 10, 23, 6, 100]))

// console.log([1,2,3].forEach(r))