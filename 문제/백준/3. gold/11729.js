const N = Number(require('fs').readFileSync(__dirname + "/../input.txt").toString().trim());
// const N = Number(require('fs').readFileSync("/dev/stdin").toString().trim());

let result = []

const hanoi = (n, from, by, to) => {
  if(n === 1) {
    result.push([from, to])
  }else{
    hanoi(n-1, from, to, by);
    result.push([from, to]);
    hanoi(n-1, by, from, to)
  }
}

hanoi(N, 1,2,3);

console.log(2 ** N - 1)
console.log(result.map(move => move.join(' ')).join('\n'));
