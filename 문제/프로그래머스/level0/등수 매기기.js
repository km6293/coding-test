function solution(arr){
  let nArr = arr.map(e => e.reduce((a,b) => (a + b) * 100));
  let rArr = [...nArr].sort((a,b) => b - a);
  let [cnt, val]  = [0,0];
  rArr.map((e,i) => {
    if(val != e){
      cnt = i + 1;
      val = e;
    }
    nArr[nArr.indexOf(e)] = cnt
  })
  return nArr
}

console.log(solution([[80, 70], [70, 80], [30, 50], [90, 100], [100, 90], [100, 100], [10, 30]]), [4, 4, 6, 2, 2, 1, 7])