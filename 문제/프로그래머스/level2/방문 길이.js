function solution(s){

  let nowLocation = [0, 0];
  let saveLocation = [[0, 0]];
  let moveValue = {"R" : [1, 0], "L" : [-1, 0], "U" : [0, 1], "D" : [0, -1]};
  let cnt = 0;
  
  for(let i = 0 ; i < s.length; i++){
    let nowValue = moveValue[s[i]];
    let nextLocation = [ nowLocation[0] + nowValue[0], nowLocation[1] + nowValue[1] ];
    if(nextLocation[0] <= 5 && nextLocation[1] <= 5 && nextLocation[0] >= -5 && nextLocation[1] >= -5){
      let chk = true;
      for(let r = 0 ; r < saveLocation.length; r++){
        if(saveLocation[r][0] == nextLocation[0] && saveLocation[r][1] == nextLocation[1]){
          let lastValue = saveLocation[saveLocation.length-1]
          if(!(lastValue[0] == nowValue[0] && lastValue[1] == nowValue[1])) {
            console.log(nowValue)
            cnt += 1;
          }
          chk = false;
          break;
        }
      }
      if(chk) saveLocation.push(nextLocation);
      nowLocation = nextLocation;
    }
  }

  let returnValue = saveLocation.length == 1 ? 0 : saveLocation.length -1 + cnt

  return returnValue;

}

console.log(solution("ULURRDLLU"), 7)
// console.log(solution("LULLLLLLU"), 7)
