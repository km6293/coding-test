function solution(a,b,c,d){
  function factorization(num) {
    let factorization = {};
    let divisor = 2;
    while (num > 1) {
      if (num % divisor === 0) {
        if (!factorization.hasOwnProperty(divisor)) {
          factorization[divisor] = 0;
        }
        factorization[divisor]++;
        num /= divisor;
      } else {
        divisor++;
      }
    }
    return factorization;
  }
  
  
  function lcm(a, b) {
    // 두 수를 소인수분해
    let factorizationA = factorization(a);
    let factorizationB = factorization(b);
    let lcm = 1;
  
    // 두 수의 소인수 중에서 가장 많이 포함된 소인수로 LCM을 만듦
    for (let key in factorizationA) {
      lcm *= Math.pow(key, Math.max(factorizationA[key], factorizationB[key] || 0));
    }
    for (let key in factorizationB) {
      if (!factorizationA.hasOwnProperty(key)) {
        lcm *= Math.pow(key, factorizationB[key]);
      }
    }
  
    return lcm;
  }

  console.log(lcm(b,d))
}

// console.log(solution(1,2,3,4), [5,4])
// console.log(solution(9,2,1,3), [29,6])
console.log(solution(3,14,5,16),)
