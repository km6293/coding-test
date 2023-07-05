let [a, b] = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split(' ').map(Number);
// let [a, b] = require('fs').readFileSync("/dev/stdin").toString().trim().split(' ').map(Number);

function findPermutation(arr, n){
  const rArr = [];
  // n === 1이란 소리는 현재 b-1개를 뽑았다라는 뜻
  // ex) [1,2,3,4] 중에 3개를 뽑을건데, 현재 [1,2] 뽑았다는 것
  // return arr.map을 하나씩 하는 이유는 하나만 더 뽑을 수 있기 때문
  // ex) [1,2,3,4] 중에 3개를 뽑을건데, 현재 [1,2] 뽑고, 나머지 [3,4]는 return 해서 밑에 permutation.map에 쓸거임
  if(n === 1) return arr.map(v => [v]);

  arr.forEach((nArr, i, oArr) => {
    // 선택한것을 제외한 나머지 list 
    // ex) [1,2,3,4]중 1을 돌았으면, rest = [2,3,4]
    const rest = [...oArr.slice(0, i), ...oArr.slice(i+1)];
    // permutation은 재귀함수로, 선택한것을 제외한 나머지 리스트와, 선택한 갯수를 빼준 뒤 다시 부른다.
    // ex) [1,2,3,4]중 3개를 뽑을건데, 현재 [1,2]를 뽑은 상태라면 return 은 [[3],[4]]가 된다.
    const permutation = findPermutation(rest, n-1);
    // 순서가 있어야 하기에 위의 permutation의 나머지 하나는 제일 끝에 붙여주고, 기존의 nArr과 합쳐서 보여준다.
    const attach = permutation.map(e => [nArr, ...e])
    rArr.push(...attach);
  })
  return rArr;
}

// 1 ~ a까지의 list
let list = new Array(a).fill().map((e,i) => i+1);
let result = findPermutation(list, b);
result.forEach(e => console.log(...e));

