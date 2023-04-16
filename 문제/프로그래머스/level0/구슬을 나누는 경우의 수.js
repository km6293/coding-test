function solution(n, m){
  let nv = 1;
  let mv = 1;
  let rv = 1;
  for(let i = 1; i <= n; i++) nv *= i
  for(let i = 1; i <= m; i++) mv *= i
  for(let i = 1; i <= (n-m); i++) rv *= i
  return Math.round(nv / (mv * rv))
}

console.log(solution(30, 29))