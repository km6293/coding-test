function solution(k, arr){

  let pArr = [];
  for(let i = 0; i < arr.length; i++) pArr.push(i);

  function permutations(arr, n){
    let results = [];
    if(n === 1) return arr.map(e => [e]);
    arr.forEach((v,i,vArr) => {
      let rest = [...vArr.slice(0, i), ...vArr.slice(i+1)];
      let perfomance = permutations(rest, n-1);
      let attached = perfomance.map(r => [v, ...r])
      results.push(...attached)
    })
    return results
  }
  
  let nArr = permutations(pArr, pArr.length);
  let cnt = 0;
  for(let i = 0; i < nArr.length; i++){
    let vCnt = 0;
    let val = k;
    for(let r = 0; r < nArr[i].length; r++){
      let ck = nArr[i][r];
      if(arr[ck][0] <= val){
        val -= arr[ck][1];
        vCnt += 1;
      }
    }
    if(vCnt > cnt) cnt = vCnt;
  }
  return cnt
}


console.log(solution(80, [[80,20],[50,40],[30,10]]), 3)