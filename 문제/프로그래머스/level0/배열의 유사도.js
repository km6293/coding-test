function solution(s1, s2) {
  return s1.filter(x => s2.includes(x)).length
}

// console.log(solution(["a", "b", "c"],["com", "b", "d", "p", "c"]),2)
console.log(solution(["n", "omg"]	,["m", "dot"]), 0)