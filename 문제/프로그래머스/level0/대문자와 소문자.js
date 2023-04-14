function solution(s){
  let val = '';
  for(let i = 0; i < s.length; i++){
    val += s[i] == s[i].toUpperCase() ? s[i].toLowerCase() : s[i].toUpperCase()
  }
  return val
}

console.log(solution("abCdEfghIJ"))