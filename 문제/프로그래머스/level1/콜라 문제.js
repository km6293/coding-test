function solution(a, b, n) {
  let sum = 0;
  while(n / a >= 1){
    c = parseInt(n/a);
    sum += c*b;
    n = n - (c * a) + (c * b)
  }
  return sum;
}


console.log(solution(2,1,20))
// console.log(solution(3,1,20))
// console.log(solution(3,2,20))

// 20 -> [12...2, 8...2, ]


// 2	1	20	19
// 3	1	20	9
// 3  2 20  36