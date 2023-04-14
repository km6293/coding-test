function solution(s){
  return s.match(/[^a-zA-Z]+/g) == null ? 0 : s.match(/[^a-zA-Z]+/g).reduce((a,b) => parseInt(a) + parseInt(b), 0)
}
