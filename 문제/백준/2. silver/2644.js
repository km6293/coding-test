let [n, xy, m, ...arr] = require("fs")
  .readFileSync(__dirname + "/../input.txt")
  .toString()
  .trim()
  .split("\n");
// let [n, xy, m, ...arr] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");

let [x, y] = xy.split(" ").map(Number);
let graph = [...Array(parseInt(n) + 1)].map(() => []);
let visited = Array(parseInt(n) + 1).fill(false);

for (let i = 0; i < m; i++) {
  let [child, parent] = arr[i].split(" ").map(Number);
  graph[child].push(parent);
  graph[parent].push(child);
}

let result = [];
const dfs = (v, num) => {
  num += 1;
  visited[v] = true;

  if (v === y) result.push(num);

  graph[v].forEach((e, i) => {
    if (!visited[e]) dfs(e, num);
  });
};

dfs(x, 0);
console.log(result.length === 0 ? -1 : result[0] - 1);
