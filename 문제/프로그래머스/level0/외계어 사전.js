function solution(a, b){
  let val = 2
  b.map(e => {
    let chk = false;
    a.map(r => {
      if(e.indexOf(r) == -1) chk = true
    })
    if(!chk) val = 1;
  })
  return val
}

console.log(solution(["z", "d", "x"],["def", "dww", "dzx", "loveaw"]),1)