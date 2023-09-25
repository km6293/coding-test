function solution(s,e){
  let answer = 0;
  let lvl = 0;
  let chk = Array.from( {length:10001}, () => false);
  let q = [s];
  chk[s] = true;
  while(q.length){
    let len = q.length
    for(let i = 0; i < len; i++){
      let nVal = q.shift();     
      for(let val of [nVal - 1, nVal + 1, nVal + 5]){
        if(val == e) return lvl + 1;
        if(val > 0 && val < 10001 && !chk[val]){
          chk[val] = true;
          q.push(val);
        }
      }
    }
    lvl += 1;
  }
  return answer
}
// console.log(solution(5,14),3)
console.log(solution(8,3),5)
