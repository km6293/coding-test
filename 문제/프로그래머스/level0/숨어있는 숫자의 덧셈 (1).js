function solution(s) {
  let val = 0;
  for(let i = 0; i < s.length; i++){
    if(Number.isInteger(parseInt(s[i]))) val += parseInt(s[i])      
  }
  return val
}

console.log(solution("aAb1B2cC34oOp"), 10)