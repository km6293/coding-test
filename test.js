// const solution = (numbers) => numbers.reduce((a, c) => a += c, 0) / numbers.length

const solution = (arr,h) => arr.filter(e => e > h).length

// console.log(solution([149, 180, 192, 170], 167),	3)
// console.log(solution([180, 120, 140],190),	0)
// console.log([1,2,3].map(e => e))
console.log([3,1,2,3].sort()[0])