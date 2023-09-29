// N이 백만이면 O(N), O(N log N)

// function solution(arr,k){
//   arr = arr.split('').reverse();
//   let stack = [];

//   while(arr.length && k > 0){
//     stack.push(arr.pop());
//     while(arr[arr.length-1] > stack[stack.length-1] && k > 0){
//       stack.pop()
//       k -= 1;
//     }
//   }

//   if( k != 0 ) stack = stack.slice(0, -k)

//   return stack.join('') + arr.reverse().join('')
// }

// 센세의 풀이

function solution(number, k){
  const stack = [];
  let count = 0;

  for (const item of number){
    while(count < k && stack[stack.length - 1] < item){
      stack.pop();
      count += 1;
    }
    stack.push(item);
  }

  while(count < k){
    stack.pop();
    count += 1;
  }

  return stack.join("");
}


// console.log(solution("1924",2),"94");
// console.log(solution("1231234",3),"3234");
console.log(solution("4177252841",4),"775841");
// console.log(solution("987654321",5),"9876");

