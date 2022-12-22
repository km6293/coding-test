function solution(arr){
  let [totalArr, chkArr] = [[],[]];
  arr.forEach(n => {
    let [num, division, divisionArr] = [n,2,[]];
    while(num != 1){
      if(num % division == 0){
        divisionArr.push(division);
        if(!chkArr.includes(division)) chkArr.push(division)
        num = num / division;
        division = 2;
      }else{
        division += 1;
      }
    }
    totalArr.push(divisionArr)
  })
  let cntArr = Array(chkArr.length).fill(0);
  for(let i = 0; i < totalArr.length; i++){
    chkArr.forEach((e,j) => {
      if(totalArr[i].includes(e)){
        if(cntArr[j] < totalArr[i].filter(r => r == e).length) cntArr[j] = totalArr[i].filter(r => r == e).length  
      }
    })
  }
  let sum = 1;
  chkArr.forEach((e,i) => {
    sum = sum * (e ** cntArr[i])
  })
  return sum
}