function solution(n,a,b)
{
  let cnt = 0;
  let [c, d] = [0,0];
  if(a > b){
    c = b; 
    d = a;
  }else{
    c = a;
    d = b;
  }

  for(let i = 0; i < Math.sqrt(n); i++){
    if(Math.round(c) === Math.round(d) ){
      break;
    }else{
      c = Math.round(c / 2);
      d = Math.round(d / 2);
      cnt += 1;
    }
  }
  return cnt
}
// console.log(solution(8,4,7),3)
// console.log(solution(8,4,7),3)
console.log(solution(16,16,2),4)