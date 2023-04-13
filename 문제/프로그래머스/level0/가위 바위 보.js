function solution(rsp) {
  val = '';
  for(let i = 0 ; i < rsp.length; i++){
    if(rsp[i] == '2'){
      val += '0'
    }else if(rsp[i] == '0'){
      val += '5'
    }else if(rsp[i] == '5'){
      val += '2'
    }
  }
  return val
}

console.log(solution("205"))