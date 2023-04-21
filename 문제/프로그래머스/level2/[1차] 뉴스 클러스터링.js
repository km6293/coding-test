function solution(str1, str2) {
  str1 = str1.toUpperCase();
  str2 = str2.toUpperCase();
  let val = 0;
  let [arr1, arr2] = [[],[]]
  let chk = /^[A-Z]$/;
  for(let i = 0; i < str1.length-1; i++){
    if(chk.test(str1[i]) && chk.test(str1[i+1])) arr1.push(str1[i]+str1[i+1])    
  }
  for(let i = 0; i < str2.length-1; i++){
    if(chk.test(str2[i]) && chk.test(str2[i+1])) arr2.push(str2[i]+str2[i+1])    
  }
  
  let nArr = [...arr1].filter(e => arr2.includes(e));
  if((arr1.length == 0 && arr2.length > 0) || (arr1.length > 0 && arr2.length == 0) || (arr1.length > 0 && arr2.length && nArr.length == 0)) return 0
  if(nArr.length == 0) return 65536

  let sArr = new Set(nArr);
  let nCount = 0;
  for(let i of sArr.keys()){
    let a = arr1.filter(e => e == i).length;
    let b = arr2.filter(e => e == i).length;
    nCount += a > b ?  b : a
  }

  let uArr = arr1.length + arr2.length - nCount;
  return parseInt(nCount / uArr * 65536)
}

// console.log(solution("E=Mf*C^2","e=mfmf*c^2"))
// console.log(solution("aa1+aa2","AAAA12"))
// console.log(solution("aaaa+bbb","aaa+bbbb"))
console.log(solution("A+C","DEF"))
