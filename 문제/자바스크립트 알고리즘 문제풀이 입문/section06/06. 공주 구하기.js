function solution(num1, num2) {
  let nArr = Array.from({ length: num1 }, (_, i) => i + 1);
  // while(nArr.length == 1){
  //   if()
  //   nArr.splice(2, 1);
  // }
  let startNum = num2;
  let chkVal = nArr.findLastIndex((e, i) => e % num2 == 0);

  startNum = !nArr[chkVal + 1] ? nVrr[0] : nArr[chkVal + 1];
  nArr = nArr.filter((e, i) => e % num2 != 0);

  console.log(startNum, nArr);
}

console.log(solution(8, 3));
