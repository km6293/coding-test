function solution(n) {
  let arr1 = [1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5];
  let arr2 = [2,1,2,3,2,4,2,5,2,1,2,3,2,4,2,5,2,1,2,3,2,4,2,5,2,1,2,3,2,4,2,5,2,1,2,3,2,4,2,5];
  let arr3 = [3,3,1,1,2,2,4,4,5,5,3,3,1,1,2,2,4,4,5,5,3,3,1,1,2,2,4,4,5,5,3,3,1,1,2,2,4,4,5,5];
  let [cnt1,cnt2,cnt3,chkCnt] = [0,0,0,0];
  for(let i = 0; i < n.length; i++){
    if(n[i] == arr1[chkCnt]){cnt1+=1};
    if(n[i] == arr2[chkCnt]){cnt2+=1};
    if(n[i] == arr3[chkCnt]){cnt3+=1};
    if(chkCnt == 40){chkCnt = 0;}else{chkCnt += 1;}
  }
  let max = [];
  if(cnt1 > cnt2){
    if(cnt1 > cnt3){
      max = [1];
    }else if(cnt1 == cnt3){
      max = [1,3];
    }else{
      max = [3];
    }
  }else if(cnt1 == cnt2){
    if(cnt1 > cnt3){
      max = [1,2];
    }else if(cnt1 == cnt3){
      max = [1,2,3];
    }else{
      max = [3];
    }
  }else{
    if(cnt2 > cnt3){
      max = [2];
    }else if(cnt2 == cnt3){
      max = [2,3];
    }else{
      max = [3];
    }
  }

  return max
}

console.log(solution([1,3,2,4,2,3,3,1,4,1,3]))
console.log(solution([1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,3]))
console.log(solution([2,1,2,3,2,4,2,5,2,1,2,3,2,4,2,5,2,1,2,3,2,4,2,5,2,1,2,3,2,4,2,5,2,1,2,3,2,4,2,5]))
console.log(solution([3,3,1,1,2,2,4,4,5,5,3,3,1,1,2,2,4,4,5,5,3,3,1,1,2,2,4,4,5,5,3,3,1,1,2,2,4,4,5,5]))


// [1,2,3,4,5]	[1]
// [1,3,2,4,2]	[1,2,3]