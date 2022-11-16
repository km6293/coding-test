function solution(s) {
  arr = ['zero','one','two','three','four','five','six','seven','eight','nine'];
  arr.map((x,i) => {
    if(s.indexOf(x) != -1){
      s = s.replaceAll(x,i)
    }
  })
  return parseInt(s);
}


// 다른 풀이
function solution(s) {
  let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  var answer = s;

  for(let i=0; i< numbers.length; i++) {
      let arr = answer.split(numbers[i]);
      console.log(arr)
      answer = arr.join(i);
      console.log(answer)
  }

  return Number(answer);
}

console.log(solution("oneeight"));

// console.log('t e s t'.join('t'))