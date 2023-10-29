let [N, M, ...list] = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split('\n');
// let [N, M, ...list] = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n');

list = list.map(e => e.split(' ').map(Number));
N = parseInt(N);

let graph = Array.from({length:N+1}, () => []);
let visited = Array.from({length:N+1}, () => false);

for (const [a, b] of list){
  graph[a].push(b);
  graph[b].push(a);
}

let cnt = 0;

function chk(list){
  list.forEach(e => {
    if(!visited[e]){
      visited[e] = true;
      cnt += 1;
      chk(graph[e]);
    }
  })
}

visited[1] = true;
chk(graph[1]);
console.log(cnt);



