function solution(n){
  let val = 0;
  for(let i = 1; i <= n; i++){
    val += 1;
    while(val % 3 == 0 || val.toString().indexOf('3') != '-1')val += 1;
  }
  return val
}

console.log(solution(15))