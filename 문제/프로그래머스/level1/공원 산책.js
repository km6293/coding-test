function solution(park, routes) {
  let [height, width] = [park.length-1, park[0].length-1];
  let row = park.findIndex(e => e.includes("S"));
  let col = park[row].indexOf("S");
  
  for(let i = 0; i < routes.length; i++){
    let [direction, move] = routes[i].split(' ');
    let [tempRow, tempCol] = [row, col];
    let chk = true;
    for(let r = 0; r < move; r++){
      if(direction == 'E') tempCol += 1;
      if(direction == 'W') tempCol -= 1;
      if(direction == 'S') tempRow += 1;
      if(direction == 'N') tempRow -= 1;

      if(tempRow < 0 || tempCol < 0 || tempRow > height || tempCol > width || park[tempRow][tempCol] == 'X') chk = false;
      if(!chk) break
    }
    if(chk){
      row = tempRow;
      col = tempCol;
    }
  }
  return [row, col]
}

// console.log(solution(["SOO","OOO","OOO"], ["E 2","S 2","W 1"])); // [2,1]
// console.log(solution(["SOO","OXX","OOO"], ["E 2","S 2","W 1"])); // [0,1]
// console.log(solution(["OSO","OOO","OXO","OOO"], ["E 2","S 3","W 1"])); // [0,0]

// console.log(solution(["OSO","OOO","OOO","OOO"], ["W 2"])); // [0,1]
console.log(solution(["OSO","OOO","OOO","OOO"], ["N 2"])); // [0,1]
// console.log(solution(["OSO","OOO","OOO","OOO"], ["S 5"])); // [0,1]
// console.log(solution(["OSO","OOO","OOO","OOO"], ["E 5"])); // [0,1]

// console.log(solution(["XXX","XSX","XXX"], ["E 1"])); // [1,1]
// console.log(solution(["XXX","XSX","XXX"], ["W 1"])); // [1,1]
// console.log(solution(["XXX","XSX","XXX"], ["S 1"])); // [1,1]
// console.log(solution(["XXX","XSX","XXX"], ["N 1"])); // [1,1]

// console.log(solution(["SOXOO","OOOOO","OOOOO", "OOOOO", "OOOOO"], ["E 3"])); // [0, 0]
// console.log(solution(["SOOOX","OOOOO","OOOOO", "OOOOO", "OOOOO"], ["E 3"])); // [0, 3]
// console.log(solution(["XOOOS","OOOOO","OOOOO", "OOOOO", "OOOOO"], ["W 3"])); // [0, 1]
// console.log(solution(["OOXOS","OOOOO","OOOOO", "OOOOO", "OOOOO"], ["W 3"])); // [0, 4]
// console.log(solution(["SOOOO","OOOOO","XOOOO", "OOOOO", "OOOOO"], ["S 3"])); // [0, 0]
// console.log(solution(["SOOOO","OOOOO","OOOOO", "OOOOO", "XOOOO"], ["S 3"])); // [3, 0]
// console.log(solution(["OOOOO","OOOOO","XOOOO", "OOOOO", "SOOOO"], ["N 3"])); // [4, 0]
// console.log(solution(["XOOOO","OOOOO","OOOOO", "OOOOO", "SOOOO"], ["N 3"])); // [1, 0]