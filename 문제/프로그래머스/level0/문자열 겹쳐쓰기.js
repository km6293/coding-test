function solution(a, b, s) {
  return a.substring(0, s) + b + a.substring(s+b.length, a.length);
}