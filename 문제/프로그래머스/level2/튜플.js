function solution(s){

  let [arr, nArr] = [[],[]];
  let val = '';
  for(let i = 1; i < s.length - 1; i++){
    if(s[i] == '}'){
      nArr.push(parseInt(val))
      arr.push(nArr)
      val = '';
      nArr = [];
    }else if(Number.isInteger(parseInt(s[i]))){
      val += s[i];      
    }else if(s[i] == ',' && s[i-1] != '}'){
      nArr.push(parseInt(val))
      val = '';
    }
  }

  let rArr = [];
  arr.sort((a,b) => a.length - b.length)
  for(let i = 0; i < arr.length; i++){
    arr[i].filter(e => {
      if(!rArr.includes(e)){
        rArr.push(e)
      }
    })
  }

  return rArr
}

// console.log(solution("{{2},{2,1},{2,1,3},{2,1,3,4}}")	,[2, 1, 3, 4])
// console.log(solution("{{1,2,3},{2,1},{1,2,4,3},{2}}")	,[2, 1, 3, 4])
// console.log(solution("{{20,111},{111}}")	,[111, 20])
// console.log(solution("{{123}}")	,[123])
console.log(solution("{{4,2,3},{3},{2,3,4,1},{2,3}}")	,[3, 2, 4, 1])





