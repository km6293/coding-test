function solution(s) {
  s = s.split('');
  let answer = 0;
  let count = 1;
  let index = 1;
  while (s.length) {
    let firstChar = s[0];
    firstChar == s[index] ? count += 1 : count -= 1;
    if (count !== 0) {
      index += 1;
    } else {
      answer += 1;
      s.splice(0, index + 1);
      index = 1;
      count = 1;
    }
  }

  return answer;
}

// console.log(solution("banana"),3)
// console.log(solution("abracadabra"), 6)
console.log(solution("aaabbaccccabba"), 3)