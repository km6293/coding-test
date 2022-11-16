function solution(nums) {
  let val = [...new Set(nums)].length;
  return nums.length/2 < val ? nums.length/2 : val
}

console.log(solution([3,1,2,3]))
// console.log(solution([3,3,3,2,2,4]))
// console.log(solution([3,3,3,2,2,2]))