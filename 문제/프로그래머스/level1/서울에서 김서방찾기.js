function solution(seoul) {
  return "김서방은 " +seoul.findIndex(seoul => seoul == 'Kim')+"에 있다"
}

console.log(solution(["Jane", "Kim"]))

function findKim(seoul){
  var idx = seoul.indexOf('Kim');
  return "김서방은 " + idx + "에 있다";
}