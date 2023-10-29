let input = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split('\n');
// let input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n');

const [N, M, V] = input.shift().split(' ').map(Number);
input = input.map(e => e.trim().split(' ').map(Number));

let graph = Array.from({length:N+1}, () => []);
let visited = Array.from({length:N+1}, () => false);
visited[V] = true;
let [dfsResult, bfsResult] = [[],[]];

for(const [a, b] of input){
  graph[a].push(b);
  graph[b].push(a);
}

const bfs = (visited) => {
  let queue = [];
  queue.push(V);
  
  while(queue.length !== 0){
    const v = queue.shift();
    for(const node of graph[v].sort((a,b) => a - b)){
      if(!visited[node]){
        queue.push(node);
        bfsResult.push(node);
        visited[node] = true;
      }
    }
  }
}

const dfs = (list) => {
  list.sort((a,b) => a - b).forEach(e => {
    if(!visited[e]){
      visited[e] = true;
      dfsResult.push(e);
      dfs(graph[e]);
    }
  })
}

bfs([...visited]);
dfs(graph[V]);    // 둘이 순서 바뀌면 visited 넣어야됨.. 귀찮

console.log(V , dfsResult.join(' ') + '\n' + V , bfsResult.join(' '));








