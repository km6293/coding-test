function solution(arr, divisor) {
  const filter = arr.filter(num => num % divisor == 0)
  return filter.length == 0 ? [-1] : filter.sort(function test(a,b){return a-b})
}


console.log(solution([50, 5, 9, 7, 10, 15, 25, 35],5))
console.log(solution([2, 36, 1, 3],1))
console.log(solution([3,2,6],10))

// 인기 많은 풀이 == 같음

function solution(arr, divisor) {
    var answer = arr.filter(v => v%divisor == 0);
    return answer.length == 0 ? [-1] : answer.sort((a,b) => a-b);
}





