function solution(s) {
  cnt = 0
  for(var i = 0; i < 10; i++){
    if(s.join('').split(i).length == 1){
      cnt += i
    }
  }
  return cnt;
}

console.log(solution([1,2,3,4,6,7,8,0]));

// 다른 사람 풀이..
function solution(numbers) {
    return 45 - numbers.reduce((cur, acc) => cur + acc, 0);
}