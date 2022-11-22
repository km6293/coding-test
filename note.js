// 참고

// 시간제한 (1초 기준)==================================================================

// N의 범위가 500인 경우 : 시간복잡도가 O(n3제곱) 인 알고리즘 설계를 하면 문제를 풀 수 있다.
// N의 범위가 2,000인 경우 : 시간복잡도가 O(n2제곱) 인 알고리즘 설계를 하면 문제를 풀 수 있다.
// N의 범위가 100,000인 경우 : 시간복잡도가 O(nlogn) 인 알고리즘 설계를 하면 문제를 풀 수 있다.
// N의 범위가 10,000,000인 경우 : 시간복잡도가 O(n) 인 알고리즘 설계를 하면 문제를 풀 수 있다.

// 실수의 한계========================================================================
// IEEE754 표준에서는 살수형을 저장하기 위해 4바이트, 혹은 8바이트의 고정된 크기의 메모리를 할당하므로, 컴퓨터 시스템은 실수 정보를 표현하는 정확도에 한계를 가짐.
// ex) 0.1 + 0.2 == 0.3 => false

// Number.EPSILON은 오차없이 나타낼 수 있는 가장 작은 양의 소수를 나타낸다.
// 이렇게 무시되어도 될 정도의 작은 오차를 구분하기 위해 등장한 프로퍼티이다.

function numberEquals(x, y){
  return Math.abs(x-y) < Number.EPSILON; // 두개의 표현가능한 숫자 사이의 최소 차이
}
// console.log(numberEquals(0.1 + 0.2, 0.3)) => true

// 소수 구하기=================================================================================
// 에라토스테네스의 체
function solution(n){
  let arr = Array(n + 1).fill(true).fill(false, 0, 2);
  for(let i = 2 ; i * i <= n; i++){
      if(arr[i]){
          for(let j = i * i; j <= n; j+=i){
              arr[j] = false;
          }
      }
  }

  return arr;
}

// let isPrimes = solution(100);

// 소수의 개수 구하기
// isPrimes.filter(e => e).length; // 25

// 소수 반환하기
// isPrimes.map((v, i) => (v) ? i : 0).filter(e => e);
// [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]

// 약수 구하기=================================================================================
const getDivisors = (num) => {
  const divisors = [];
  for(let i = 1 ; i <= Math.sqrt(num) ; i++){
      if(num % i === 0) {
          divisors.push(i);
          if(num / i != i) divisors.push(num / i);
      }
  }
  
  // divisors.sort((a, b) => a - b);
  return divisors;
}
// console.log(getDivisors(1))

// 소수 판별===========================================

function isPrime(num) {
  
  if(num === 2) {
    return true;
  }
  
  for(let i = 2; i <= Math.floor(Math.sqrt(num)); i++){
    if(num % i === 0){
      // 한 번이라도 나누어 졌으니 소수가 아니므로 return false
      return false; 
    }
  }
  // 나눠진 수가 없다면 해당 수는 소수이므로 return true
  return true; 
}
