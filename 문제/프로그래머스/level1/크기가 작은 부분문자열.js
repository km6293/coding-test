function solution(t, p) {
  let cnt = 0;
  for (let i = 0; i < t.length - p.length + 1; i++) {
    let val = t[i];
    for (let j = i + 1; j < i + p.length; j++) {
      val += t[j];
    }
    if (parseInt(val) <= parseInt(p)) cnt += 1;
  }
  return cnt;
}

// console.log(solution("3141592", "271"), 2);
// console.log(solution("500220839878", "7"), 8);
console.log(solution("10203", "15"), 3);
