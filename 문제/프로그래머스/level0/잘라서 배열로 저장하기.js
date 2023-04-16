function solution(s,n){
  let r = [];
  for(let i = 0; i < s.length; i = i + n) r.push(s.slice(i , i + n))
  return r
}

console.log(solution("abc1Addfggg4556b",6))