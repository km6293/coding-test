function solution(n,t){
  let chk = false;
  let val = 0;
  for(let i = -1000; i < 2000; i++){
    let sum = 0;
    let cnt = 0;
    for(let r = i; r < i + n; r++){
      cnt += 1;
      sum += r;
      if(cnt == n && t == sum){
        chk = true;
        val = i;
        break;
      }
    }
    if(chk) break;
  }
  let arr = [];
  for(let i = 0; i < n; i++){
    arr.push(val);
    val += 1;
  }
  return arr
}

console.log(solution(5,5))