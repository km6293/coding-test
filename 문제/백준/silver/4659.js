const input = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split("\n")
// const input = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");

let chkList = ['i','e','u','o','a'];

for(let i = 0; i < input.length; i++){
  let chk = false;

  // 모음 하나 포함 되어 있다면
  if(input[i].split('').some(e => chkList.includes(e))){

    // 모음 3개 / 자음 3개 연속 되었다면
    for(let r = 0; r < input[i].length -2; r++){
      if(chkList.includes(input[i][r]) && chkList.includes(input[i][r+1]) && chkList.includes(input[i][r+2]) || 
      (!chkList.includes(input[i][r]) && !chkList.includes(input[i][r+1]) && !chkList.includes(input[i][r+2]))){
        break;
      }else{
        chk = true;
        break;
      }
    }
    // 같은 글자 x
    for(let r = 0; r < input[i].length - 1; r++){
      if((input[i][r] == input[i][r+1]) && !((input[i][r] == 'e' && input[i][r+1] == 'e') || (input[i][r] == 'o' && input[i][r+1] == 'o'))){
        chk = true;
        break;
      }
    }
  }
}