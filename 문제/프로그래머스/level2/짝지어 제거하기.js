function solution(s){

  let stack = [s[0]];
  let cnt = 0;

  for(let i = 1; i < s.length; i++){
    if(s[i] === stack[cnt]){
      stack.pop();
      cnt -= 1;
    }else{
      stack.push(s[i])
      cnt += 1;
    }
  }
  
  return stack.length === 0 ? 1 : 0;
}

// console.log(solution('baabaa'), 1)
// console.log(solution('cdcd'), 0)
console.log(solution('aaaa'), 1)
