function solution(money) {
  return [parseInt(money / 5500), money % 5500]
}

console.log(solution(15000))