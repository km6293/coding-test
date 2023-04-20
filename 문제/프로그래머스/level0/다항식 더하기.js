function solution(s) {
  let arr = s.split(" + ");
  let [xNum, num] = [0, 0];

  arr.forEach((n) => {
    if (n.includes("x")) {
      const strVal = n.replace("x", "") || "1";
      xNum += parseInt(strVal);
    } else {
      num += parseInt(n);
    }
  });

  let answer = [];
  if (xNum) answer.push(`${xNum === 1 ? "" : xNum}x`);
  if (num) answer.push(num);

  return answer.join(" + ");
}

console.log(solution("3x + 7 + x")); // "4x + 7"
// console.log(solution("x + x + x")); // "3x"