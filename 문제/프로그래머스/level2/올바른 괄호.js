function solution(s){  
  if(s.length == 0 || s.length == 1 || s[0] == ')' || s[s.length-1] == '(') return false
  let b = 0;
  for(let i = 0; i < s.length; i++){ s[i] == '(' ? b += 1 : b -= 1; }
  return b == 0 ? true : false;
}

console.log(solution("()()"),true)
// console.log(solution("(())()"),true)
// console.log(solution(")()("),false)
// console.log(solution("(()("),false)

