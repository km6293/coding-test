function solution(a, n){
  let val = '';
  for(let i = 0 ; i < a.length; i++){
    for(let r = 0; r < n; r++){
      val += a[i]
    } 
  }
  return val
}

console.log(solution("asdf",3))