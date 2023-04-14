function solution(s){
  s = s.split(' ')
  val = parseInt(s[0])
  s.map((e,i) => {
    if(s[i-1] == '+'){val += parseInt(e)}
    else if(s[i-1] == '-'){val -= parseInt(e)}
  });
  return val
}

console.log(solution("3 + 4 - 1 + 1"), 6)