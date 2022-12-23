function solution(n, words) {  
  let [result,breakVal] = [[0,0],0];
  for(let e = 0; e < words.length; e++){
    for(let j = 0; j < e; j++){
      if(words[j] == words[e]) {
        console.log(words[j] , words[e])
        result = [(e+1) % n == 0 ? n : (e+1) % n, Math.ceil((e+1)/n)]
        breakVal = 1;
        break
      }
    }
    if(breakVal == 0){
      if(e != 0){
        if(words[e][0] != words[e-1][words[e-1].length-1]){
          result = [(e+1) % n == 0 ? n : (e+1) % n, Math.ceil((e+1)/n)]
          breakVal = 1;
          break
        }
      }
      if(breakVal == 1) break
    }

    if(breakVal == 1) break
  }

  return result
}
// 가장 먼저 탈락하는 사람의 번호와 그 사람이 자신의 몇 번째 차례에 탈락하는지
// console.log(solution(3,	["tank", "kick", "know", "wheel", "lesd", "dream", "mother", "robot", "tank","tank"]),	[3,3])
// console.log(solution(5,	["hello", "observe", "effect", "take", "either", "recognize", "encourage", "ensure", "establish", "hang", "gather", "refer", "reference", "estimate", "executive"]),	[0,0])
// console.log(solution(2,	["hello", "rone", "even", "never", "now", "world", "draw"]),	[2,1])
// console.log(solution(2,	["hello", "one", "even", "never", "now", "world", "draw"]),	[1,3])
// console.log(solution(2,	["hello", "one", "even", "never", "now", "world", "even"]),	[1,3])
// console.log(solution(4,	['a','aba','a','aba']),	[3,1])
// console.log(solution(2,	["land", "dream", "mom", "mom", "ror"]),	[2,2])
console.log(solution(2,	["land", "dream", "mom", "mom"]),	[2,2])
