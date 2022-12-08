function solution(s) {
  let arr = [];
  if(s.length != 1){
    for(let i = 0; i < s.length; i++){
      let num = -1;
      for(let j = i-1; j >= 0; j--){
        if(s[i] == s[j]){
          num = i - j;
          break;
        }
      }
      arr.push(num)
    }
  }else{ arr.push(-1) }
  return arr
}

console.log(solution("aa"));
// console.log(solution("b"), [-1, -1, -1, 2, 2, 2]);