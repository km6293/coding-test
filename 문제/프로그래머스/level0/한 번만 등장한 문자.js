function solution(s){
  let val = '';
  s = s.split('').sort()
  while(s.length != 0){
    let length = s.filter(e => e == s[0]).length;
    if(length == 1) val += s[0];
    s = s.filter(e => e != s[0]);
  }
  return val
}

// console.log(solution("abcabcadc"))