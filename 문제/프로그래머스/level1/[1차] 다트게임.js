function solution(dartStr) {
  let arr = [[],[],[]];
  let [n,sum] = [0,0];
  for(let i = 0; i < dartStr.length; i++){
    arr[n].push(dartStr[i]);
    if(isNaN(dartStr[i]) && (dartStr[i+1] != '*' && dartStr[i+1] != '#')) n += 1;
  }
  arr.forEach((e,i) => {
    let [num, str, spe] = ['','',''];
    e.forEach( r => { !isNaN(r) ? num += r : ['#','*'].indexOf(r) > -1 ? spe = r : str = r; })
    num = parseInt(num);
    if(str == ('D')) num **= 2;
    if(str == ('T')) num **= 3;
    if(spe == ('#')) num *= -1;
    if(spe == ('*')) num *= 2;
    if(i != 2 && (arr[i+1].indexOf('*') != -1)) num *= 2;
    sum += num;
  })
  return sum
}

// console.log('1 ====>' ,solution('1S2D*3T'));
// console.log('2 ====>' ,solution('1D2S#10S'));
// console.log('3 ====>' ,solution('1D2S0T'));
// console.log('4 ====>' ,solution('1S*2T*3S'));
// console.log('5 ====>' ,solution('1D#2S*3S'));
// console.log('6 ====>' ,solution('1T2D3D#'));
// console.log('7 ====>' ,solution('1D2S3T*'));
// console.log(solution('10S10S10S#'))

// 1	1S2D*3T	  37	11 * 2 + 22 * 2 + 33
// 2	1D2S#10S	9	  12 + 21 * (-1) + 101
// 3	1D2S0T	  3	  12 + 21 + 03
// 4	1S*2T*3S	23	11 * 2 * 2 + 23 * 2 + 31
// 5	1D#2S*3S	5	  12 * (-1) * 2 + 21 * 2 + 31
// 6	1T2D3D#	  -4	13 + 22 + 32 * (-1)
// 7	1D2S3T*	  59	12 + 21 * 2 + 33 * 2
