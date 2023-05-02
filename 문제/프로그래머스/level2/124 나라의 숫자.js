function solution(n){
  let rVal = '';
  let nArr = [4,1,2];
  while(n){
    rVal = nArr[n%3] + rVal;
    n = n%3 == 0 ? n/3 - 1 : Math.floor(n/3);
  }
  return rVal
}

console.log(solution(12))



// 1, 2 ,4
// 11, 12, 14
// 21, 22, 24
// 41, 42, 44
// 111

// 1 -> 1
// 2 -> 2
// 3 -> 4

// 4 -> 11
// 5 -> 12
// 6 -> 14
// 7 -> 21
// 8 -> 22
// 9 -> 24
// 10 -> 41
// 11 -> 42
// 12 -> 44

// 13 -> 111
// 14 -> 112