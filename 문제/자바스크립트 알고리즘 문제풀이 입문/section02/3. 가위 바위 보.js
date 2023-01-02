function solution(aArr,bArr){
  let result = '';
  for(let i = 0; i < aArr.length; i++){
    if(aArr[i] == bArr[i]) result += 'D'
    else{
      if((aArr[i] == 1 && bArr[i] == 3) || (aArr[i] == 2 && bArr[i] == 1) || aArr[i] == 3 && bArr[i] == 2) result += 'A'      
      else result += 'B'
    }
  }
  return result;
}

console.log(solution([2,3,3,1,3],[1,1,2,2,3]))