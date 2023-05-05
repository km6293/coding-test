function solution(park, routes) {
  // 높이, 넓이
  let area = [park[0].length ,park.length ];
  let [location, obstacle] = [[],[]];
  park.forEach((e,i) => {
    for(let r = 0; r < e.length; r++){
      if(park[i][r] == 'X') obstacle.push([i,r]);
      if(park[i][r] == 'S') location = [i,r];
    }
  })

  for(let i = 0 ; i < routes.length; i++){
    let val = routes[i].split(' ');
    let [direction, move] = [val[0], parseInt(val[1])];
    let moveVal = [...location];
    let [max, min] = [0,0];
    let x = -1;
    if(direction == "E" || direction == "W"){
      direction == "E" ? moveVal[1] += move : moveVal[1] -= move
      if(0 <= moveVal[1] && area[1] > moveVal[1]){

      }else{
        max = Math.max([moveVal[1],location[1]])
        min = Math.min([moveVal[1],location[1]])
        x = obstacle.find(e => (e[0] == area[0]) && (e[1] <= max) && (e[1] >= min))
      }
    }else{
      direction == "S" ? moveVal[0] += move : moveVal[0] -= move
      if(0 <= moveVal[0] && area[0] > moveVal[0]){
        
      }else{
        max = Math.max([moveVal[0],location[0]])
        min = Math.min([moveVal[0],location[0]])
        x = obstacle.find(e => (e[0] == area[0]) && (e[1] <= max) && (e[1] >= min))
      }
    }   
    if(x != -1) location = [...moveVal]
  }
  return location
}

console.log(solution(["SOO","OOO","OOO"],["E 2","S 2","W 1"]), [2,1])
// console.log(solution(["OSO","OOO","OXO","OOO"],["E 2","S 3","W 1"]), [0,0])
	