function solution(s, n){
  let val = '';
  for(let i = n-1; i < s.length; i = i + n) val += s[i]
  return val
}

console.log(solution("dfjardstddetckdaccccdegk",4))