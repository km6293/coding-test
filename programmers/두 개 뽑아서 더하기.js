function solution(numbers) {
  var answer = [];
  for(let i = 0; i < numbers.length; i++){
    for(let j = 0; j < numbers.length; j++){
      if(i != j){
        let val = numbers[i]+numbers[j];
        if(!answer.includes(val)){
          answer.push(val);
        }
      }
    }
  }
  return answer.sort((a,b) =>  a-b);
}

console.log(solution([5,0,2,7]))
// console.log(solution([2,1,3,4,1]))

// [2,1,3,4,1]	[2,3,4,5,6,7]
// [5,0,2,7]	[2,5,7,9,12]