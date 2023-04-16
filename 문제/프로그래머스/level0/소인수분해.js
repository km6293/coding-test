function solution(n){
  let chk = 2;
  let arr = new Set();
  while(n != 1){
    if(n % chk == 0){
      arr.add(chk)
      n = n / chk;
    }else{
      chk += 1;
    }
  }
  return [...arr]
}

console.log(solution(420))