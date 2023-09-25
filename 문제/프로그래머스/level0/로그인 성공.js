function solution(a, b){  
  let val = '';
  b.map(e => {
    if(e[0] == a[0]){
      if(e[1] == a[1]){
        val = "login"
      }
      val = val != '' ? val : "wrong pw"
    }
  })
  return val != '' ? val : "fail"
}

console.log(solution(["meosseugi", "1234"],	[["rardss", "123"], ["yyoom", "1234"], ["meosseugi", "1234"]]))
// console.log(solution(["programmer01", "15789"],	[["programmer02", "111111"], ["programmer00", "134"], ["programmer01", "1145"]]))
// console.log(solution(["rabbit04", "98761"],	[["jaja11", "98761"], ["krong0313", "29440"], ["rabbit00", "111333"]]))
