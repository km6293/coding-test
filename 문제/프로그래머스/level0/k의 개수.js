function solution(a,b,c){
  let cnt = 0;
  for(let i = a; i <= b; i++){
    i.toString().split('').map(e => {
      if(e == c.toString()) cnt += 1;
    })
  }
  return cnt
}

console.log(solution(1,13,1))