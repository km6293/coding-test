function solution(N, stages) {

  let sArr = [...stages];
  let sLen = stages.length;
  let sObj = {};
  for(let i = 1; i <= N; i++){
    let sVal = sArr.filter(e => e > i);
    sObj[i] = (sLen - sVal.length) / sLen;
    sArr = sVal;
    sLen = sVal.length;
  }

  const testa = Object.entries(sObj).sort(([, a], [, b]) => b - a);
  let arr = [];
  for(let i = 0; i < testa.length; i++){
    arr.push(parseInt(testa[i][0]))
  }
  return arr;
}

// console.log(solution(5,[2, 1, 2, 6, 2, 4, 3, 3]))
// console.log(solution(4,[4,4,4,4,4]))

// 5	[2, 1, 2, 6, 2, 4, 3, 3]	[3,4,2,1,5]
// 4	[4,4,4,4,4]	              [4,1,2,3]

// 다른 사람 풀이
function solution(N, stages) {
    let result = [];
    for(let i=1; i<=N; i++){
        let reach = stages.filter((x) => x >= i).length;
        let curr = stages.filter((x) => x === i).length;
        result.push([i, curr/reach]);
    }
    result.sort((a,b) => b[1] - a[1]);
    return result.map((x) => x[0]);
}