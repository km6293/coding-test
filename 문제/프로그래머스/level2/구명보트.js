function solution(people, limit) {

  people.sort((a, b) => a - b);
  let cnt = 0;
  let [left, right] = [0, people.length - 1];

  while(left <= right){
    if(people[left] + people[right] <= limit){
      left += 1;
      right -= 1;
    }else{
      right -= 1;
    }
    cnt += 1;
  }
  return cnt
}

// console.log(solution([70, 50, 80, 50],100), 3)
console.log(solution([70, 80, 50],100), 3)

