function solution(n, arr1, arr2) {
  let nArr = [];
  for(let i = 0; i < n; i++){
    let val = (parseInt(arr1[i].toString(2)) + parseInt(arr2[i].toString(2))).toString();
    if(val.length != n){  val = '0'.repeat((n - val.length)) + val  }
    val = val.replace(/[1-9]/gi, "#")
    val = val.replace(/[0]/gi, " ")
    nArr.push(val)
  }
  return nArr;
}
console.log(solution(5,[9, 20, 28, 18, 11],[30, 1, 21, 17, 28]));

