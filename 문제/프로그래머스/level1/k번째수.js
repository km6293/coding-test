function solution(array, commands) {
  var realArr = []
  for(var i= 0; i < commands.length; i++){
      var a = commands[i][0] // 자르는 시작 값
      var b = commands[i][1] // 자르는 끝 값
      var c = commands[i][2] // 자르는 리스트의 해당 값
      
      var nArr = array.slice(a-1,b)
      nArr.sort((a,b)=>{return a-b})
      // sort는 sort만 해서 끝나는게 아니라 직접 해줘야 됬었음..
      realArr.push(nArr[c-1])    
    }
  return realArr
}

console.log(solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]]))

// 입력값 〉	[1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]]
// 기댓값 〉	[5, 6, 3]

// 인기 많은 풀이 
function solution2(array,commands){
  return commands.map(command => {
    const [sPositon, ePosition, position] = command
    const newArray = array
        .filter((value, fIndex) => fIndex >= sPositon -1 && fIndex <= ePosition -1)
        .sort((a,b) => a-b) 

    return newArray[position -1]
  })
}

console.log(solution2([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]]))