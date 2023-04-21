function solution(size, arr) {
  if(size == 0) return arr.length * 5;
  let val = 0;
  let nArr = [];
  arr.forEach((e,r) => {
    let nVal = e.toUpperCase();
    if(nArr.includes(nVal)){
      nArr.splice(nArr.indexOf(nVal), 1);
      nArr = [...nArr, nVal];
      val += 1;
    }else{
      if(nArr.length == size) nArr.shift();
      nArr.push(nVal)
      val+= 5;
    }
  })
  return val
}

console.log(solution(		3, ["Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul"]))