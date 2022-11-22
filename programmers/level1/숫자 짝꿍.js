function solution(x,y) {
  let numArr = [0,1,2,3,4,5,6,7,8,9];
  let arr = [];

  numArr.forEach(v => {
    let a = x.split('').filter(x => x == v).length 
    let b = y.split('').filter(y => y == v).length 
    let chkLen = a > b ? b : a
    for(let i = 0; i < chkLen; i++){
      arr.push(v)
    }
  })
  if(arr.length == 0){
    arr = '-1'
  }else if(Number(arr.join('')) == 0){
    arr = '0'
  }else{
    arr = arr.sort((a,b) => b-a).join('')
  }

  return arr
}

// console.log(solution("100", "2345"))
// console.log(solution("100", "203045"))
// console.log(solution("100", "123450"))
// console.log(solution("12321", "42531"))
console.log(solution("5525", "1255"))

//  X	     Y	     result
// "100"	  "2345"	  "-1"
// "100"	  "203045"	"0"
// "100"	  "123450"	"10"
// "12321"	"42531"	  "321"
// "5525"	  "1255"	  "552"