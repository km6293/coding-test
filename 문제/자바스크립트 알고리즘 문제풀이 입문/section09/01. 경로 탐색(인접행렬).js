function solution(n, arr){
  let cnt = 0;
  let graph = Array.from( Array(n+1), () => Array(n+1).fill(0));
  let chk = Array.from( {length:n+1}, () => 0);

  for(let [a,b] of arr){
    graph[a][b] = true;
  }

  function dfs(m){
    if(m == n) cnt += 1;
    else{
      for(let i = 1; i <= n; i++){
        if(!chk[i] && graph[m][i]){
          chk[i] = true;
          dfs(i)
          chk[i] = false;
        }
      }
    }
  }

  chk[1] = true;
  dfs(1)
  return cnt
}

let arr=[[1, 2], [1, 3], [1, 4], [2, 1], [2, 3], [2, 5], [3, 4], [4, 2], [4, 5]];
console.log(solution(5, arr));