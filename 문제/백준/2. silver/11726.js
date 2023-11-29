let num = +require('fs').readFileSync(__dirname + "/../input.txt").toString().trim();
// let num = +require('fs').readFileSync("/dev/stdin").toString().trim();

const arr = Array.from({length: num+1});
arr[0]=1;
arr[1]=1;

for(let i = 2; i <= num; i++){
  arr[i] = (arr[i-1] + arr[i-2]) % 10007;
}

console.log(arr[num]);