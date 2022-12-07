function solution(k, score) {
  let arr = [];
  for(let i = 0; i < score.length; i++){
    let chkArr = [...score].splice(0, i+1).sort((a,b) => b-a);
    chkArr.length > k ? arr.push(chkArr[k-1]) : arr.push(chkArr[i]);
  }
  return arr;
}



// console.log(solution(3, [10, 100, 20, 150, 1, 100, 200]),' ====' ,[10, 10, 10, 20, 20, 100, 100])
console.log(solution(4, [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000]), [0, 0, 0, 0, 20, 40, 70, 70, 150, 300])



