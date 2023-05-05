function solution(keymap, targets) {
  let sArr = new Set();
  keymap.forEach(e => {
    for(let i = 0; i < e.length; i++){
      sArr.add(e[i]);
    }
  })
  
  let sObj = {};
  sArr.forEach(e => {
    let index = 999;
    for(let i = 0; i < keymap.length; i++){
      let fIndex = keymap[i].indexOf(e);
      if(fIndex != -1 && fIndex < index) index = fIndex;
    }
    sObj[e] = index
  })
  
  let results = new Array(targets.length);
  targets.forEach((e,i) => {
    let cnt = 0;
    for(let r = 0; r < e.length; r++){
      if(sObj[e[r]] === undefined){
        cnt = -1;
        break;
      }else{
        cnt = cnt + sObj[e[r]] + 1
      }
    }
    results[i] = cnt;
  })
  return results
}

// console.log(solution(["ABACD", "BCEFD"], ["ABCD","AABB"]), [9, 4])
// console.log(solution(["AA"],["B"]), [-1])
console.log(solution(["AGZ", "BSSS"],["ASA","BGZ"]), [4, 6])