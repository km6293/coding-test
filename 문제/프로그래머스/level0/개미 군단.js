function solution(n){
  let cnt = parseInt(n / 5);
  let res = n % 5;
  cnt += parseInt(res / 3);
  res = res % 3;
  return cnt + res
}

console.log(solution(999))
