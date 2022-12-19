function solution(s){  
  if(s[0] === ')' || s[s.length-1] === '(' || s.length === 1 || s.length === 0) return false
  let b = 0;
  for(let i = 0; i < s.length; i++){ 
    if(s[i] === '('){
      b+= 1;
    }else{
      b -= 1;
      if(b < 0){
        return false;
      }
    }
  }
  return b === 0 ? true : false;
}

// console.log(solution("()()"),true)
// console.log(solution("(())()"),true)
// console.log(solution(")()("),false)
// console.log(solution("(()("),false)
console.log(solution("()())(()"),false)
