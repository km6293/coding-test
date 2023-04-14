function solution(s){
  s = s.split(' ')
  let val = 0;
  let rVal = 0;
  for(let i = 0; i < s.length; i++){
    if(s[i] == "Z"){
      val -= rVal
    }else{
      rVal = parseInt(s[i]);
      val += parseInt(s[i])
    }
  }
  return val
}

console.log(solution("1 2 Z 3"), 4)