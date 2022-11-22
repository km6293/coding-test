function solution(nums) {
  function isPrime(num) {
    for(let i = 2; i <= Math.floor(Math.sqrt(num)); i++){
      if(num % i === 0){
        return false; 
      }
    }
    return true; 
  }  
  let cnt = 0;
  for(let i = 0; i < nums.length-2;i++){
    for(let j = i+1; j < nums.length-1; j++){
      for( let k = j+1; k < nums.length; k++){
        let num = nums[i]+nums[j]+nums[k];
        if(isPrime(num)){
          cnt += 1;
        }
      }
    }
  }  
  return cnt
}



// console.log(solution([1,2,3,4]))
console.log(solution([1,2,7,6,4]))
// [1,2,3,4]	1
// [1,2,7,6,4]	4