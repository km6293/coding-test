function solution(n) {
  let bin = n.toString(2);
  let chk = bin.indexOf(0);
  if(chk == -1)return parseInt("10"+bin.substring(1,bin.length),2)
  else{
    let fOne = bin.indexOf(1, 1);
    if(fOne == -1) return parseInt(bin.substring(0,bin.length)+'0',2);
    else{
      if(bin.lastIndexOf(1) < chk){
        let num = bin.replace(/0/g, "").length;
        return parseInt("1"+ "0".repeat(bin.length - num + 1) + "1".repeat(num - 1),2);
      }else{
        let str = bin.substring(bin.lastIndexOf('01')+2,bin.length)
        let oneLen = str.replace(/0/g, "").length;
        return parseInt(bin.substring(0, bin.lastIndexOf('01')) + '10' + '0'.repeat(str.length - oneLen) + '1'.repeat(oneLen),2)
      }
    }
  }
}

console.log(solution(6))
// console.log(solution(12))
// console.log(solution(8))
// console.log(solution(78),	83)
// console.log(solution(15),	23)
// console.log(solution(1), 2)
// console.log(solution(2), 4)
// console.log(solution(7), 11)
// console.log(solution(4), 8)
// console.log(solution(8), 16)