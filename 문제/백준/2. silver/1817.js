const [a, b] = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split("\n");
// const [a, b] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");

let maxWeight = parseInt(a.split(' ')[1]);
let books = b ? b.split(' ').map(Number).reverse() : [];
let minCnt = 0;

while(books.length != 0){
  let sum = books.pop();
  while(sum + books[books.length-1] <= maxWeight){
    sum += books.pop();
  }  
  minCnt += 1;
}

console.log(minCnt);
