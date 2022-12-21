function solution(a,b) {
  let arr = [];
  for(let i = 1; i <= Math.floor(Math.sqrt(b)); i++){
    if(b % i == 0) arr.push(i)
  }
  let val = '';
  arr.forEach(e => {
    let c = b/e;
    if((c * 2) + (e * 2) + 4 == a){
      val = c > e ? [c+2, e+2] : [e+2, c+2]
    }
  })
  return val
}

// console.log(solution(10,2),[4,3])
console.log(solution(8,1),[3,3])
// console.log(solution(24,24),[8,6])
// console.log(solution(20,12),[8,4])

