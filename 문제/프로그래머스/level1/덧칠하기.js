function solution(n, m, section) {
  let cnt = 0;
  while(section.length > 0){
      let start = section.pop();
      while(start - section[section.length-1] + 1 <= m){
          section.pop();
      }
      cnt += 1
  }
  return cnt
}