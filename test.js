// // 그래프 생성
// const graph = {
//     1: [2, 3],
//     2: [4, 5],
//     3: [6, 7],
//     4: [],
//     5: [],
//     6: [],
//     7: []
//   };
  
//   // DFS 함수
//   function dfs(graph, start) {
//     const visited = {};
//     function dfsHelper(node) {
//         console.log(visited)
//       visited[node] = true;
//       const neighbors = graph[node];
//       for (let i = 0; i < neighbors.length; i++) {
//         const neighbor = neighbors[i];
//         if (!visited[neighbor]) {
//           dfsHelper(neighbor);
//         }
//       }
//     }
//     dfsHelper(start);
//   }
  
//   // DFS 실행
//   dfs(graph, 1);
  



function solution(n){
    let answer="";
    function DFS(v){
        if(v>7) return;
        else{
            answer+=(v+' ');
            DFS(v*2);
            DFS(v*2+1);
        }
    }
    DFS(n);
    return answer;
}

console.log(solution(1));