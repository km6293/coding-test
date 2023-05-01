function solution(num){
  let total = num.length;
  let plus = [781, 156, 31, 6, 1];
  let al = ["A","E","I","O","U"];
  for(let i = 0 ; i < num.length; i++){
    total +=  plus[i] * al.indexOf(num[i]);
  }
  return total
}

// console.log(solution("AAAAE"), 6)
// console.log(solution("AAAE"), 10)
// console.log(solution("I"), 1563)
console.log(solution("EIO"), 1189)
