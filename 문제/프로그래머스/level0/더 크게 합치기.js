function solution(a, b) {
  a = a.toString();
  b = b.toString();
  return parseInt(a+b) > parseInt(b+a) ? parseInt(a+b) : parseInt(b+a)
}