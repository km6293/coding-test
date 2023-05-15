function solution(n, k){

  let returnValue = [];
  let number = [];
  for(let i = 1; i <= n; i++) number.push(i);
  let factorial = n - 1;
  k = k - 1;
  
  while(factorial >= 1){
    let chkValue = 1;
    for(let i = 1; i <= factorial; i++) chkValue *= i;
    let quotient = parseInt(k / chkValue);
    returnValue.push(number[quotient]);
    number.splice(quotient, 1);
    k = k % chkValue;
    factorial -= 1;
  }

  return [...returnValue, ...number]
}

// console.log(solution(5, 26) ,[2,1,3,5,4])
// console.log(solution(3, 5) ,[3,1,2])
// console.log(solution(4, 5) ,[1,4,2,3])
// console.log(solution(4, 7) ,[2, 1, 3, 4])


// 풀이 설명
// n = 5, k = 26
// [1, 2, 3, 4, 5] 에서 1 을 기준으로 하여 나머지의 전체 경우의 수는 (n - 1)! == 4! == 24 이다.
// 편의상 k = 25 로 26 - 1 로 하였고, 나눴을때, 몫 = 1, 나머지는 1이다.
// 몫은 인덱스로 하여서 [1,2,3,4,5] 에서 2이다. 그럼 없애고 남은것은 [1,3,4,5]이다.

// 첫번째 값을 구했으니 두번째 값으로 넘어간다.
// k = 위에서 구한 나머지 값으로 진행한다.
// k = 1, 경우의 수는 3! = 6 이다.
// 몫 = 0, 나머지는 1 이므로 현재 담겨져있는 값은 [2, 1] 이고, 남아있는 것은 [3,4,5]이다.

// 이런식으로 factorial을 값이 1일때까지 진행을 하며 마지막 남아있는 것은 합쳐서 없앤다.