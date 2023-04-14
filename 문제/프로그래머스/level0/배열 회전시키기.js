function solution(arr,s){
  if(s == 'left'){
    let val = arr.shift();
    arr.push(val);
  }else{
    let val = arr.pop();
    arr.unshift(val)
  }
  return arr
}

console.log(solution([1, 2, 3],"right"),	[3, 1, 2])
// console.log(solution([4, 455, 6, 4, -1, 45, 6],"left"),	[455, 6, 4, -1, 45, 6, 4])

	