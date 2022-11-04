function solution(aArr,bArr) {
  aArr = aArr.sort();
  bArr = bArr.sort();
  for(let i = 0; i < aArr.length; i++){
    if(aArr[i] !== bArr[i]){
      return aArr[i]
    }
  }
}