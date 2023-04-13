function solution(numbers) {
  return numbers.reduce((p, c) => p + c, 0) / numbers.length
}