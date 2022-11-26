// function solution(a, b, n) {
//   let [etc,sum] = [0,0];
//   while((n+etc)/a >= 1){
//     etc = parseInt((n+etc)%a);
//     n = parseInt((n+etc)/a)*b;
//     sum += n;
//     console.log(n, etc)
//   }
//  return sum;
// }


// console.log(solution(2,1,20))
console.log(solution(3,1,20))
// console.log(solution(3,2,20))

// 20 -> [12...2, 8...2, ]


// 2	1	20	19
// 3	1	20	9
// 3  2 20  36