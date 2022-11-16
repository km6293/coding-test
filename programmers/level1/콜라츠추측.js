function solution(n) {
  let cnt = 0
  while(n !== 1){
    if(cnt === 500){return -1}
    cnt += 1
    if(n % 2 === 0){
      n /= 2
    }else{
      n = (n * 3) + 1 
    }
  }
  return cnt;
}

console.log(solution(626331));

// 깔끔한 풀이
function collatz(num) {
  var answer = 0;
  while(num !=1 && answer !=500){
      num%2==0 ? num = num/2 : num = num*3 +1;
  answer++;
}
  return num == 1 ? answer : -1;
}