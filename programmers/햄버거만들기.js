function solution(arr) {
  cnt = 0;
  let str = arr.join('');
  while(true){
    let fVal = str.indexOf('1231');
    if(fVal == -1){
      break;
    }else{
      let val = 0;
      if(fVal > 30){val = fVal -10};      
      str = str.substring(val,fVal)+str.substring(fVal+4,str.length);
      cnt += 1;
    }
  }
  return cnt;
}

// function solution(ingredient) {
//   let count = 0;

//   for (let i = 0; i < ingredient.length; i++) {
//       if (ingredient.slice(i, i + 4).join('') === '1231') {
//           count++;
//           ingredient.splice(i, 4);
//           i -= 3;
//       }
//   }

//   return count;
// }