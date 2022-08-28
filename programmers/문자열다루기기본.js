// function solution(n){
//   return (n.split("").find(x => x.charCodeAt() < 48 || x.charCodeAt() > 57) === undefined ? true : false)
// }
// 실패 ====> 길이 체크를 안해서 틀림


function solution(n){
  if(n.length == 4 || n.length == 6){
    return /^[0-9]+$/.test(n)  
  }else{
    return false
  }    
}

console.log(solution("12d"))
console.log(solution("12e3"))
console.log(solution("123"))
console.log(solution("123A"))