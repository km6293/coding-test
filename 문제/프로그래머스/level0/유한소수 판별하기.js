function solution(a, b){
  while(Number.isInteger(b / 2)) b = b / 2
  while(Number.isInteger(b / 5)) b = b / 5

  for(let i = 2; i <= a; i ++){
    if(a % i == 0 && b % i == 0){
      a = a / i;
      b = b / i;
    }
  }

  const divisors = [];
  for(let i = 1 ; i <= Math.sqrt(b) ; i++){
    if(b % i === 0) {
      divisors.push(i);
      if(b / i != i) divisors.push(b / i);
    }
  }
  
  return divisors.filter(e => e != 1 && e != 2 && e != 5).length == 0 ? 1 : 2
}

console.log(solution(1, 20), 2)