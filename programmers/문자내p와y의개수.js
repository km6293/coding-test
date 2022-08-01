function solution(s){
  let lower = s.toLowerCase()
  let chk = 0
  for(let i = 0; i < lower.length; i++){
    if(lower[i] == 'p'){ chk += 1}
    else if (lower[i] == 'y'){ chk -= 1}
  }

  return chk == 0 ? true : false
}

console.log(solution("pPoooyY"))
console.log(solution("pPY"))