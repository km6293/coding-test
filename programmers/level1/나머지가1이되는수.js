function solution(n){
  let a = 2;
  while (n % a != 1){
    if(n % a == 1){ break; }
    a += 1
  }
  return a;
}

console.log(solution(12))
