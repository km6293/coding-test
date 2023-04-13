function solution(num, k) {
  let val = num.toString().indexOf(k.toString()) ;
  return val == -1 ? -1 : val + 1
}