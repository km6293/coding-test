function solution(arr){
  let [sum, cnt] = [0,0];
  arr.forEach(e => {
    e ? cnt ++ : cnt = 0;
    sum += cnt
  })
  return sum
}

console.log(solution([1,0,1,1,1,0,0,1,1,0]))
// console.log(solution([1,1,1,1,1,0,0,0,0,0]))

// console.log(0 == false)
// console.log(1 == true)
