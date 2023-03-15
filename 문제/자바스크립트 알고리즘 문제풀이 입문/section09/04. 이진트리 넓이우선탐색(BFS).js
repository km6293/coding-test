function solution(){  
  let val = '';
  let q = [1];
  while(q.length){
    let shiftVal = q.shift();
    val += shiftVal;
    for(v of [shiftVal * 2, shiftVal * 2 + 1] ){
      if(v > 7) continue
      q.push(v)
    }
  }
  return val
}

console.log(solution());