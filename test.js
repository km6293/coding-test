function solution(ingredient) {
  let cnt = 0;
  let str = ingredient.join("");
  while (/1231/.test(str)) {
    cnt += str.match(/1231/g).filter(function (item) {
      return item !== "";
    }).length;
    str = str.replace(/1231/g, "");
  }
  return cnt;
}

console.log(solution([1, 2, 1, 1, 2, 3, 1, 2, 3, 1, 3, 1]), 3);
// console.log(solution([1, 3, 2, 1, 2, 1, 3, 1, 2]), 0);
// console.log(solution([1, 2, 3, 1, 1, 2, 3, 1, 1, 2, 3, 1]), 3);

// [2, 1, 1, 2, 3, 1, 2, 3, 1]	2
// [1, 3, 2, 1, 2, 1, 3, 1, 2]	0
