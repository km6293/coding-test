function solution(n) {
  return n % (n.toString().split('').map(x => parseInt(x)).reduce((a, b) => a+b)) === 0 ? true : false;
}

// console.log(solution(13));

// 다른 사람 풀이
function Harshad(n){
  return !(n % (n + "").split("").reduce((a, b) => +b + +a ));
}

console.log(Harshad(13))