function solution(k, m, score) {
  let total = 0;
  let sortArr = [...score].sort((a,b) => b - a);
  for (let i = 1 ; i < parseInt(score.length / m)+1; i++){  total += sortArr[m*i-1];}
  return total*m;
}

console.log(solution(4,3,[4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]))
// console.log(solution(3,4,[1, 2, 3, 1, 2, 3, 1]))
// solution(3,4,[1, 2, 3, 1, 2, 3, 1])

// k	m	score	result
// 3	4	[1, 2, 3, 1, 2, 3, 1]	8
// 4	3	[4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]	33
