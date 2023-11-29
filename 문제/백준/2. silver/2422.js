let [input, ...inputArr] = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split("\n");
// let [input, ...inputArr] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input.split(' ').map(Number);
inputArr = inputArr.map(e => e.trim().split(' ').map(Number).sort((a,b) => a-b));
let visited = Array.from({length: N}, () => Array.from({length: N}).fill(false));

for(let i = 0 ; i < inputArr.length; i++){
  const [a,b] = inputArr[i];
  visited[a-1][b-1] = true;
  visited[b-1][a-1] = true;
}

let sum = 0;
for (let i = 1; i <= N; i++) {
  for (let j = i + 1; j <= N; j++) {
    if (!(visited[i - 1][j - 1])){
      for (let k = j + 1; k <= N; k++) {
        if (!(visited[k - 1][j - 1] || visited[i - 1][k - 1])) sum+=1 ;
      }
    }
  }
}

console.log(sum)