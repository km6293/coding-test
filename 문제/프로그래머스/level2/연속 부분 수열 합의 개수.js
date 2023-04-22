function solution(arr) {
  let list = new Set();
  let cnt = 0;
  let nArr = [...arr, ...arr.slice(0, arr.length-1)];

  for(let i = 0; i < arr.length; i++){
    for(let r = 0; r < arr.length; r++){
      list.add(nArr.slice(r, r+1+cnt).reduce((a,b) => a + b , 0))
    }
      cnt += 1;
  }
  return list.size;
}

console.log(solution([7,9,1,1,4]), 18)

