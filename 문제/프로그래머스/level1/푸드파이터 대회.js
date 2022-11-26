function solution(food) {
  let answer = '';
  for(let i = 1; i < food.length; i++){ food[i] % 2 == 1 ? answer += String(i).repeat((food[i]-1)/2) : answer += String(i).repeat(food[i]/2) }
  return answer+'0'+answer.split('').reverse().join('');
}

console.log(solution([1, 7, 1, 2]))
// [1, 3, 4, 6]	"1223330333221"
// [1, 7, 1, 2]	"111303111"