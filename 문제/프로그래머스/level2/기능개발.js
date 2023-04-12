function solution(progresses, speeds){

  let nArr = [];
  for(let i = 0 ; i < progresses.length; i++){
    nArr.push(Math.ceil((100 - progresses[i]) / speeds[i]))
  }

  let val = nArr[0]; 
  let cnt = 1;
  let rArr = [];
  for(let i = 1; i < nArr.length; i++){
    if(nArr[i] > val){
      val = nArr[i]
      rArr.push(cnt);
      cnt = 1;
    }else{
      cnt += 1;
    }
    if(i == nArr.length -1 ){
      rArr.push(cnt)
    }
  }
  return rArr

}

// console.log(solution([93, 30, 55],[1, 30, 5]), [2, 1])
// console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]), [1, 3, 2])
console.log(solution([95, 90, 99, 99, 80, 79], [1, 1, 1, 1, 1, 1]), [1, 3, 1,1])
