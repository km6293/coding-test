function solution(arr) {
  let r = '';
  arr.map(e => r += e);
  return r
}

console.log(solution(["a","b","c"]))