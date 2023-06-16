let val = [[1,3],[2,3],[3,4],[4,5],[4,6],[4,7],[7,8],[7,9]];
let map = {};

val.forEach(e => {
  e.forEach((r,i) => {
    if(map[r] == undefined) map[r] = [];
    map[r].push(!i ? e[1] : e[0]);
  })
})

let maxLength = 0;
let maxCnt = 0;
let valueList = [...Object.values(map)];

valueList.forEach(e => { if(e.length > maxLength) maxLength = e.length; })
valueList.forEach(e => { if(maxLength == e.length) maxCnt += 1; })

if(maxCnt == 1){
  let val = [];
  valueList.forEach(e => { if(maxLength == e.length) val = [...e] })

  let rVal = new Array(val.length).fill(0);
  let index = 0;
  while(val.length != 0){
    let nd = val.shift();
    if(map[nd].length == 1){
      rVal[index] += 1;
    }else{
      
    }
  }
}else{
  return -1;
}
