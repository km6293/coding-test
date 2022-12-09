function solution(s) {
  let [delCnt, chgCnt, zero] = [0,0,0];
  while(s != 1){
    for(let i = 0; i < s.length; i++){ 
      if(!parseInt(s[i])) {
        delCnt += 1; 
        zero += 1; 
      }
    } 
    s = (s.length - zero).toString(2);
    chgCnt += 1;
    zero = 0;
  }
  return [chgCnt, delCnt];
}


// console.log(solution("110010101001"),	[3,8])
// console.log(solution("01110"),	[3,3])
console.log(solution("1111111"),	[4,1])