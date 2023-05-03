function solution(players, callings) {

  let obj = {};
  players.forEach((e,i) => obj[e] = i);

  callings.forEach(e => {
    let index = obj[e];
    let temp = players[index-1];
    players[index-1] = e;
    players[index] = temp;
    obj[players[index]] += 1;
    obj[e] -= 1;
  })
  return Object.entries(obj).sort((a,b) => a[1] - b[1]).map(v => v[0]);
}

console.log(solution(["mumu", "soe", "poe", "kai", "mine"],["kai", "kai", "mine", "mine"]),["mumu", "kai", "mine", "soe", "poe"])

