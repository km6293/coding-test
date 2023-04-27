function solution(arr,k){
  arr = arr.split('').reverse()
  let stack = [];

  while(arr.length && k > 0){
    stack.push(arr.pop());
    while(arr[arr.length-1] > stack[stack.length-1] && k > 0){
      stack.pop()
      k -= 1;
    }
  }

  if( k != 0 ) stack = stack.slice(0, -k)

  return stack.join('') + arr.reverse().join('')
}

// console.log(solution("1924",2),"94");
// console.log(solution("1231234",3),"3234");
// console.log(solution("4177252841",4),"775841");
console.log(solution("987654321",5),"9876");

