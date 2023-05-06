function solution(want, number, discount){
  let includeArr = want.map(e => discount.filter(r => e == r).length);
  let chk = includeArr.map((e,i) => e >= number[i]);
  let cnt  = 0;
  if(includeArr.includes(0) || chk.includes(false)) return 0;
  else{
    for(let i = 0; i < discount.length - 9; i++){
      let s = [...discount].slice(i,i+10);
      let length = [...want].map(e => [...s].filter(r => e == r).length);
      let lArr = [...length].map((e,i) => e >= number[i]);
      if(!lArr.includes(false)){
        cnt += 1;
      }
    }
  }
  return cnt;
}

console.log(solution(["banana", "apple", "rice", "pork", "pot"],[3, 2, 2, 2, 1],["chicken", "apple", "apple", "banana", "rice", "apple", "pork", "banana", "pork", "rice", "pot", "banana", "apple", "banana"]), 3);
// console.log(solution(["apple"],[10],["banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana"]),0);
