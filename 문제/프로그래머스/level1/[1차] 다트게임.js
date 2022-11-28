function solution(dartStr) {
  let str = dartStr;
  let fLen = 0;
  let lLen = str.length;
  let arr = [0];
  
  for(let i = 0; i < 2; i++){
    str = str.substring(fLen+1, lLen);
    fLen = str.search(/[1-9]/g);
    if(str.indexOf('10')!=-1)fLen = str.indexOf('10');
    console.log(str.indexOf('10'))
    arr.push(arr[i]+fLen+1);  

  }
  let strArr = [
    dartStr.substring(arr[0],arr[1]), 
    dartStr.substring(arr[1],arr[2]), 
    dartStr.substring(arr[2],dartStr.length)
  ];

  sum = 0;
  for(let i = 0; i < 3; i++){
    let testStr = strArr[i];
    let result = parseInt(testStr.replace(/[^0-9]/g, ""));
    if(strArr[i].indexOf('S') != -1) result *= 1;
    if(strArr[i].indexOf('D') != -1) result **= 2;
    if(strArr[i].indexOf('T') != -1) result **= 3;
    if(strArr[i].indexOf('#') != -1) result *= -1;
    if(strArr[i].indexOf('*') != -1) result *= 2;
    if(i != 2){
      if(strArr[i+1].indexOf('*') != -1) result *= 2;  
    }
    if(!isNaN(result))sum += result
  }
  
  return sum;
}





// console.log('1 ====>' ,solution('1S2D*3T'));
console.log('2 ====>' ,solution('1D2S#10S'));
// console.log('3 ====>' ,solution('1D2S0T'));
// console.log('4 ====>' ,solution('1S*2T*3S'));
// console.log('5 ====>' ,solution('1D#2S*3S'));
// console.log('6 ====>' ,solution('1T2D3D#'));
// console.log('7 ====>' ,solution('1D2S3T*'));
// console.log(solution('10S10S10S'))


// 1	1S2D*3T	  37	11 * 2 + 22 * 2 + 33
// 2	1D2S#10S	9	  12 + 21 * (-1) + 101
// 3	1D2S0T	  3	  12 + 21 + 03
// 4	1S*2T*3S	23	11 * 2 * 2 + 23 * 2 + 31
// 5	1D#2S*3S	5	  12 * (-1) * 2 + 21 * 2 + 31
// 6	1T2D3D#	  -4	13 + 22 + 32 * (-1)
// 7	1D2S3T*	  59	12 + 21 * 2 + 33 * 2
