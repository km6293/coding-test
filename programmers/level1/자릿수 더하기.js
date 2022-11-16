function solution(n)
{
  var val = 0;
  for(var i = 0; i < n.toString().length; i++){
    val += parseInt(n.toString()[i])
  }
  return val
}

//console.log(solution(987))


function solution(n){
    // 쉬운방법
    return (n+"").split("").reduce((acc, curr) => acc + parseInt(curr), 0)
    // n+"" : 자바스크립트에서 덧셈 연산자 +를 사용할 때, 피연산자 중 어느 하나가 문자열이면 문자열이 아닌 다른 피연산자도 문자열로 타입이 변환되어 문자열을 합친 값이 반환.
    // ==> String(n+"") 과 동일함.
    // split("") 배열로 변경해버림
    // reduce 각 자리 더하기
    // ,0 reduce의 initial value는 첫 acc 값 
    // 즉, 0을 넣어서 acc 초기값을 정수화 ("문자열 + 정수 = 문자열" 방지차원). initial value를 지정하지 않는다면 parseInt(acc) + parseInt(curr)로 하면 됨
}
