function solution(msg){
  let compression = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  let returnArr = [];
  while(msg.length != 0){
    let chkVal = msg[0];
    let index = 1;
    while(msg[index] != undefined && compression.includes(chkVal + msg[index])){
      chkVal += msg[index];
      index += 1;
    }
    if(msg[index] != undefined) {
      compression.push(chkVal + msg[index]);
    }
    returnArr.push(compression.indexOf(chkVal) + 1);
    msg = msg.slice(index);
  }
  return returnArr
}

// console.log(solution("KAKAO"), [11, 1, 27, 15])
// console.log(solution("TOBEORNOTTOBEORTOBEORNOT"), [20, 15, 2, 5, 15, 18, 14, 15, 20, 27, 29, 31, 36, 30, 32, 34])
// console.log(solution("ABABABABABABABAB"), [1, 2, 27, 29, 28, 31, 30])
// console.log(solution("AAAAA"), [1, 27, 27])
// console.log(solution("AAAAAA"), [1, 27, 28])
console.log(solution("AAAAAAA"), [1, 27, 28, 1])

