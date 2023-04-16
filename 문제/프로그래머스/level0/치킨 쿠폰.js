function solution(c) {

  let f = 0;  
  while (c >= 10) {
    f += Math.floor(c / 10);
    c = Math.floor(c / 10) + (c % 10);
  }
  
  return f;
}

console.log(solution(1999))