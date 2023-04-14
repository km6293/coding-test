function solution(arr){
  let cnt = 0;
  arr.map(e => e.toString().split('').map(r => cnt += r == '7' ? 1 : 0))
  return cnt 
}

console.log(solution([7, 77, 17]),4)