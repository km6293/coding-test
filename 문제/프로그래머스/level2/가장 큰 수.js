// function solution(s){
//   s = s.map(e => e.toString()).sort().reverse()
//   let numArr = []
//   for(let i = 9 ; i >= 0; i--){
//     numArr.push(s.filter(e => e[0] == i))
//   }
//   let val = '';

//   for(let i = 0; i < numArr.length; i++){
//     if(numArr[i].length != 0){
//       if(numArr[i].length == 1){
//         val += numArr[i]
//       }else{
//         let nArr = numArr[i].sort((a,b) => (b+a) - (a+b))
//         for(let r = 0; r < nArr.length; r++){
//           val += nArr[r]
//         }
//       }
//     }
//   }

//   if(parseInt(val) == 0) val = '0';
//   return val
// }


// 2 번째 풀이
function solution(numbers) {

  let arr = Array.from({length: 10}, () => []);

  numbers.forEach(e => arr[(e+'')[0]].push(e));

  let val = '';
  arr.reverse().map(e => {
    val += e.sort((a,b) => (b+''+a) - (a+''+b)).join('');
  })

  return parseInt(val) === 0 ? '0' : val;
}



// console.log(solution([555, 565, 566, 55, 56, 5, 54, 544, 549]))
console.log(solution([0,0,0,0]),0)
// console.log(solution([6, 10, 2]), "6210")
// console.log(solution([3, 30, 34, 340, 5, 9, 32]), "9534330")
// console.log(solution([1,5,31,30,301,3,9,0]), "953231301300")
// let a = ["3","30","32","302","320","34","304","340"];
// console.log(a.sort())


