function solution(arr){
  let a = false;
  let b = false;
  a = arr[0] > 0 ? true : false;
  b = arr[1] > 0 ? true : false;

  let chk = 0;
  if(a == true && b == true){
    chk = 1;
  }else if(a == true && b == false){
    chk = 4
  }else if(a == false && b == true){
    chk = 2
  }else if(a == false && b == false){
    chk = 3
  }
  return chk
}

console.log(solution([2,4]), 1)
// console.log(solution([-7,9]), 2)