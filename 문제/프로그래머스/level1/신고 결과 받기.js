function solution(idList, report, k) {
  let [arr, chkId] = [[...new Set(report)],[]];
  let [cntArr,reVal] = [Array(idList.length).fill(0),Array(idList.length).fill(0)];
  arr.forEach(e => {
    let deId = e.substring(e.indexOf(' ')+1,e.length);
    idList.forEach((f,i) => {
      if(f == deId) cntArr[i] += 1;
    })
  })
  cntArr.forEach((e,i) => { if(e >= k) chkId.push(idList[i]) })
  arr.forEach(e => {
    let [useId, deId] = e.split(' ');
    if(chkId.includes(deId)) {
      reVal[idList.indexOf(useId)] += 1
    }
  })
  return reVal
}


// console.log(solution(["muzi", "frodo", "apeach", "neo"],["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"],2),[2,1,1,0])
console.log(solution(["con", "ryan"],["ryan con", "ryan con", "ryan con", "ryan con"],3),[0,0])
