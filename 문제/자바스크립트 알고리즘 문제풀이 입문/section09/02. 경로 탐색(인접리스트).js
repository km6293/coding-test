function solution(n, arr){
  let cnt = 0;
  let graph = Array.from( Array(n+1), () => Array());
  let chk = Array.from( {length:n+1}, () => 0);
  let path = [];

  for(let [a,b] of arr){
    graph[a].push(b)
  }

  function dfs(m){
    if(m == n) {
      cnt += 1;
      console.log(path)
    }
    else{
      for(let i = 0; i < graph[m].length; i++){
        if(!chk[graph[m][i]]){
          chk[graph[m][i]] = true;
          path.push(graph[m][i])
          dfs(graph[m][i])
          chk[graph[m][i]] = false;
          path.pop()
        }
      }
    }
  }
  path.push(1)
  chk[1] = true;
  dfs(1)
  return cnt
}

let arr=[[1, 2], [1, 3], [1, 4], [2, 1], [2, 3], [2, 5], [3, 4], [4, 2], [4, 5]];
console.log(solution(5, arr));