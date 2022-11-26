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