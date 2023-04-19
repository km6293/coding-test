function solution(arr, n){
  arr.sort((a,b) => b - a)
  arr.sort((a,b) => {
    if(Math.abs((a - n)) < Math.abs((b - n))) return -1;
  })
  return arr
}

console.log(solution([10000,20,36,47,40,6,10,7000], 30), [36, 40, 20, 47, 10, 6, 7000, 10000])