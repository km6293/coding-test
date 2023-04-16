function solution(n){

  const getDivisors = (num) => {
    const divisors = [];
    for(let i = 1 ; i <= Math.sqrt(num) ; i++){
        if(num % i === 0) {
            divisors.push(i);
            if(num / i != i) divisors.push(num / i);
        }
    }
    return divisors;
  }
  let [cnt ,val] = [0, 1];
  while(val != n+1){
    if(getDivisors(val).length > 2)cnt += 1;
    val += 1;
  }
  return cnt
}

console.log(solution(10))