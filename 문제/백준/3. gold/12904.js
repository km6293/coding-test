let [S, T] = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split("\n");
// let [S, T] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");

// 결과 플래그
let resultFlag = false;

// 재귀
const recursion = (str) => {
  if(str.length <= S.length){
    if(str === S) resultFlag = true;
    return;
  }

  const lastIndex = str.length - 1;
  if(str[lastIndex] === 'A'){
    recursion(str.substring(0, lastIndex))
  }else if(str[lastIndex] === 'B'){
    recursion(str.substring(0, lastIndex).split('').reverse().join(''))
  }else{
    return
  }

}

recursion(T)

console.log(resultFlag === true ? 1 : 0);