let input = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split("\n");
// let input = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");

const [[N], ...nodes] = input.map((e) => e.split(' ').map(Number));
const graph = Array.from({ length: N + 1 }, () => []);
const visited = Array(N + 1).fill(false);
const parent = Array(N + 1);
const queue = [1];

for (const [a, b] of nodes) {
  graph[a].push(b);
  graph[b].push(a);
}

while (queue.length) {
  const node = queue.shift();
  for (const x of graph[node]) {
    if (!visited[x]) {
      visited[x] = true;
      parent[x] = node;
      queue.push(x);
    }
  }
}

let result = [];
for (let i = 2; i < N + 1; i++) {
  result.push(parent[i])
}
console.log(result.join('\n'));