function solution(m, arr) {
  const result = [];

  // DFS 함수
  function dfs(depth, start) {
    for (let i = start; i < arr.length; i++) {
      dfs(depth + 1, i); // 재귀 호출
    }
  }

  dfs(0, 0);

  return [...result, result.length]

}


console.log(solution(2, [3,6,9]))
