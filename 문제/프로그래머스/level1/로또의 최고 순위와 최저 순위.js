function solution(lottos, win_nums) {
  let difference = lottos.filter(x => !win_nums.includes(x));
  let zeroNum = difference.filter(x => x == 0).length;
  const val = {'6':'1', '5':'2', '4':'3', '3':'4', '2':'5', '1':'6', '0':'6'};
  return([parseInt(val[6 - difference.length + zeroNum]), parseInt(val[6 - difference.length])]);
}

// console.log(solution([44, 1, 0, 0, 31, 25],[31, 10, 45, 1, 6, 19]))
// console.log(solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25]))
// console.log(solution([45, 4, 35, 20, 3, 9],[20, 9, 3, 45, 4, 35]))

// lottos	                 win_nums	               result
// [44, 1, 0, 0, 31, 25]	[31, 10, 45, 1, 6, 19]	 [3, 5]
// [0, 0, 0, 0, 0, 0]	    [38, 19, 20, 40, 15, 25] [1, 6]
// [45, 4, 35, 20, 3, 9]	[20, 9, 3, 45, 4, 35]	   [1, 1]

console.log(parseInt(7/3*1000))