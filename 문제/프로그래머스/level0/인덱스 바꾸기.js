function solution(s,a,b){
  arr = s.split('')
  let val = arr[a]
  arr[a] = arr[b] 
  arr[b] = val;
  return arr.join('')
}

console.log(solution("hello",1,2),"hlelo")