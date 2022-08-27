function solution(n, m) {
  let min = n > m ? m : n;
  let max = n > m ? n : m;

  // 유클리드 호제법
  // ex) (1071, 1029) => (1029, 42) => (42, 21) =>(21, 0)
  // 나눈 나머지 값으로 0으로 갈때까지 진행
  while(min !== 0){ 
    c = max % min
    max = min
    min = c
  }

  return [max, n*m/max]
}

// console.log(solution(17, 13))

// 대단한 풀이
function gcdlcm(a, b) {
  var r;
  for(var ab= a*b;r = a % b;a = b, b = r){console.log(b, r)}
  return [b, ab/b];
}

console.log(gcdlcm(21, 15))

