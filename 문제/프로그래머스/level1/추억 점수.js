function solution(name, yearning, photo) {
  let returnArr = []
  for(let i = 0; i < photo.length; i++){
    let total = 0;
    for(let r = 0; r < photo[i].length; r++){
      let index = name.indexOf(photo[i][r]);
      if(index !== -1){
        total += yearning[index];
      }
    }
    returnArr.push(total);
  }
  return returnArr
}


// console.log(solution(["may", "kein", "kain", "radi"],[5, 10, 1, 3],[["may", "kein", "kain", "radi"],["may", "kein", "brin", "deny"], ["kon", "kain", "may", "coni"]]), [19, 15, 6])
// console.log(solution(["kali", "mari", "don"],[11, 1, 55],[["kali", "mari", "don"], ["pony", "tom", "teddy"], ["con", "mona", "don"]]), [67, 0, 55])
console.log(solution(["may", "kein", "kain", "radi"],[5, 10, 1, 3],[["may"],["kein", "deny", "may"], ["kon", "coni"]]), [5, 15, 0])
	
	