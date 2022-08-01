
// npm install fs
let fs1 = require('fs');
var input = fs1.readFileSync('baekJoon/example.txt').toString().split(' ');
// * 백준 밖에서 풀어볼때는 input값을 담은 txt파일을 만들어서 readFileSync에 담으면 된다. 백준에서는 /dev/stdin을 넣으면 된다.

const A = parseInt(input[0]);
const B = parseInt(input[1]);

// console.log(A+B);

// =====================================================================

// npm install readline
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
  const input = line.split(' ');
  const result = Number(input[0])+Number(input[1]);
  console.log(result);

  rl.close();
}).on('close', ()=>{
  process.exit();
});



