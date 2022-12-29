function solution(a, arr){
  let [cnt, max] = [1,arr[0]];
  arr.forEach(e => {
    if(e > max){
      max = e;
      cnt += 1;
    }
  })
  return cnt
}

console.log(solution(8, [130 ,135 ,148 ,140 ,145 ,150 ,150 ,153]), 5);