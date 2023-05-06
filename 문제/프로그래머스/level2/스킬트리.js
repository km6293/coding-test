function solution(skill, skillTrees) {
  skill = skill.split('');
  let cnt = 0;
  skillTrees.forEach(e => {
      let sArr = skill.map(r => e.indexOf(r));
      let chk = true;
      let fIndex = sArr.indexOf(-1);
      if(fIndex != -1){
        for(let i = fIndex; i < sArr.length; i++){
          if(sArr[i] != -1){
            chk = false;
            break;
          }
        }
      }

      let val = fIndex == -1 ? sArr.length : fIndex;
      for(let i = 0; i < val -1; i++){
        if(sArr[i] > sArr[i+1]){
          chk = false;
          break;
        }
      }    
      if(chk) cnt += 1;
  })
  return cnt;
}

console.log(solution("CBD"	,["BACDE", "CBADF", "AECB", "BDA"]	), 2)