function solution(a, b, n) {
  let [etc,sum] = [0,0];
  while((n+etc)/a >= 1){
    n = parseInt((n+etc)/a)*b;
    etc = parseInt((n+etc)%a);
    sum += n;
    console.log(n, etc)
  }
 return sum;
}

console.log(solution(2,1,20))
// console.log(solution(3,1,20))
// console.log(solution(3,2,20))

// 2	1	20	19
// 3	1	20	9
// 3  2 20  36