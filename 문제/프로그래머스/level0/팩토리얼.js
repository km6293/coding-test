function solution(n){
  let val = 1;
  for(let i = 1; i < 12; i++){
    val *= i;
    if(val > n){
      return i - 1;
    }
  }
}

console.log(solution(3628800),3)