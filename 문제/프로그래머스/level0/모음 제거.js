function solution(my_string) {
  let val = '';
  let chk = ['a', 'e', 'i', 'o', 'u']
  for(let i = 0; i < my_string.length; i++){
    if(!chk.includes(my_string[i])) val+= my_string[i]
  }
  return val
}

console.log(solution("bus"),"bs")