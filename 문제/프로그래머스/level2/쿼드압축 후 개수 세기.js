function solution(arrr) {

  let chk = [0,0]
  function dfs(arr){
    if (arr.every(row => row.every(cell => cell === 0))) return chk[0] += 1;
    if (arr.every(row => row.every(cell => cell === 1))) return chk[1] += 1;

    const len = arr.length;
    let [q1, q2, q3, q4] = [[],[],[],[]];
    for(let i = 0 ; i < len; i++){
      let [s1, s2, s3, s4] = [[],[],[],[]];
      for(let r = 0; r < len; r++){
        if(i < len/2 && r < len/2){s1.push(arr[i][r])}
        else if(i < len/2 && r >= len/2){s2.push(arr[i][r])}
        else if(i >= len/2 && r < len/2){s3.push(arr[i][r])}
        else if(i >= len/2 && r >= len/2){s4.push(arr[i][r])}
      }
      if(s1.length != 0)q1.push(s1)
      if(s2.length != 0)q2.push(s2)
      if(s3.length != 0)q3.push(s3)
      if(s4.length != 0)q4.push(s4)
    }
    dfs(q1)
    dfs(q2)
    dfs(q3)
    dfs(q4)
  }
  dfs(arrr);

  return chk
}


// console.log(solution([[1,1,0,0],[1,0,0,0],[1,0,0,1],[1,1,1,1]]), [4,9])
console.log(solution([[1,1,1,1,1,1,1,1],[0,1,1,1,1,1,1,1],[0,0,0,0,1,1,1,1],[0,1,0,0,1,1,1,1],[0,0,0,0,0,0,1,1],[0,0,0,0,0,0,0,1],[0,0,0,0,1,0,0,1],[0,0,0,0,1,1,1,1]]), [10,15])
