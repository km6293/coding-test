function solution(n){
  let arr = [];
  for(let i = 0 ; i < n.length; i++){
    if(Number.isInteger(parseInt(n[i]))) arr.push(parseInt(n[i]))
  }
  return arr.sort((a,b) => a - b);
}

console.log(solution("hi12392"))