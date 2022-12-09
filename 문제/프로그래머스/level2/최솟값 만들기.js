function solution(A,B){
  let [sortA, sortB, sum] = [A.sort((a,b) => a-b), B.sort((a,b) => b-a), 0];
  for(let i = 0; i < sortA.length; i++){
    sum += sortA[i] * sortB[i];
  }
  return sum
}

// console.log(solution([1, 4, 2], [5, 4, 4]),	29)
console.log(solution([1,2],[3,4]),10)
