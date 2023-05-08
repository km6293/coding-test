function solution(s) {
  let move = {"L" : [-1, 0], "R" : [1, 0], "U" : [0, 1], "D" : [0, -1]};
  let now = [0, 0];
  let save = new Set();

  for(let i = 0 ; i < s.length; i++){
    let chkMove = move[s[i]];
    let next = [now[0] + chkMove[0] , now[1] + chkMove[1]];

    if(next[0] <= 5 && next[0] >= -5 && next[1] <= 5 && next[1] >= -5){
      save.add('' + now[0] + now[1] + next[0] + next[1]);
      save.add('' + next[0] + next[1] + now[0] + now[1]);
      now = next;
    }
  }
  return save.size / 2
}

// console.log(solution("ULURRDLLU"), 7)
console.log(solution("LULLLLLLU"), 7)
