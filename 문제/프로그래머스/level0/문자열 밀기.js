function solution(a,b){
  if(a == b) return 0;
  let arr = a.split('')
  for(let i = 1; i < a.length; i++){
    arr = [arr.pop(), ...arr]
    if(arr.join('') == b){
      return i;
    }
  }
  return -1
}

console.log(solution("hello","ohell"	), 1)
// console.log(solution("atat", "tata"	), 1)

// console.log(solution("apple","elppa"	), -1)