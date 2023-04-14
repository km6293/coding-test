function solution(n){
  for(let i = 1; i < 999; i++){
    if(Number.isInteger(n * i / 6)){
      return (i * n) / 6
    }
  }
}

console.log(solution(10))