function solution(s) {
  return s.split(' ').map((t) => t.split('').map((a,i) => i % 2 ? a.toLowerCase(): a.toUpperCase()).join("")).join(" ")
}

console.log(solution("try hello world"))
console.log(solution("try helloworld"))


// 좋아요가 많은 풀이

function toWeirdCase(s){
  //함수를 완성해주세요
  return s.toUpperCase().replace(/(\w)(\w)/g, function(a){return a[0].toUpperCase()+a[1].toLowerCase();})
}