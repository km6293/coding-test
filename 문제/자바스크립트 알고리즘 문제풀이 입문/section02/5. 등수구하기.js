function solution(arr){
  for(let i = 0; i < arr.length; i++){
    console.log(
      arr.filter(e => { 
        e < arr[i] 
      })
    )
  }
}

// console.log(solution([87, 89, 92, 100, 76]),4,3,2,1,5)
console.log(solution([92, 93, 92, 92, 76]),2,2,2,1,5)

