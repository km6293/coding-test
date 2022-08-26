function solution(a,b) {
  let max = a, min = b
  if(b > a){ 
    max = b, min = a
  }
  return (max+min) * (max-min+1) / 2
}

console.log(solution(3,3))

// 다른 사람 풀이
function adder(a, b){
  var result = 0

  // abs -> 절댓값
  return (a+b)*(Math.abs(b-a)+1)/2;
}
