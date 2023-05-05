function solution(today, terms, privacies) {
  let rArr = [];
  let [tYyyy, tMm, tDd] = today.split('.').map(e => parseInt(e));
  for(let i = 0 ; i < privacies.length; i++){
    let [date, gubun] = privacies[i].split(' ');
    let [yyyy,mm,dd] = date.split('.').map(e => parseInt(e));
    let pMm = parseInt(terms.find(e => gubun == e.split(' ')[0]).split(' ')[1]);
    if(mm + pMm > 12){
      yyyy += parseInt((mm + pMm) / 12);
      mm = (mm + pMm) % 12;
    }else{
      mm = mm + pMm
    }
    if(mm == 0){
      yyyy -= 1;
      mm = 12;
    }
    if(tYyyy > yyyy){
      rArr.push(i+1);
    }else if(tYyyy == yyyy && tMm > mm){
      rArr.push(i+1);
    }else if(tYyyy == yyyy && tMm == mm && tDd >= dd){
      rArr.push(i+1);
    }
  }
  return rArr
}
// console.log(solution("2022.05.19",["A 6", "B 12", "C 3"],["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"]), [1, 3])
// console.log(solution("2020.01.01",["Z 3", "D 5"],["2019.01.01 D", "2019.11.15 Z", "2019.08.02 D", "2019.07.01 D", "2018.12.28 Z"]), [1, 4, 5])
// console.log(solution("2021.12.08",["A 18"],["2020.06.08 A"]), [1, 4, 5])
// console.log(solution("2022.12.08", ["A 6"], ["2022.06.08 A"]), [1])
console.log(solution("2021.12.08", ["A 18"], ["2020.06.08 A"]), [1])



