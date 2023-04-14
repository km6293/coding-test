function solution(n){
  return n.toString().split('').map(e => String.fromCharCode(parseInt(e) + 97)).join('')
}

console.log(solution(23))