function solution(x, n) {
  var answer = [];
  for(var i = 1; i <= n; i++){
    answer.push(x*i)
  }
  return answer;
}

console.log(solution(2,5)) 
// [2,4,6,8,10]


// 한줄 풀이
function solution(x, n) {
    return Array(n).fill(x).map((v, i) => (i + 1) * v)
}

// fill 배열의 시작 인덱스부터 끝 인덱스의 이전까지 정적인 값 하나로 채움.