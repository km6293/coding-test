let [n, ...input] = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split("\n");
// let [n, ...input] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");

n = +n
input = input.map(row => row.split(' ').map(Number));
const result = Array.from({length: n}, () => Array.from({length: n}).fill(0));

const nx = [0,0,1,-1];
const ny = [1,-1,0,0];

const findCloseFavorites = (favorites) => {

  let favoritesList = [];
  let maxClose = 0;

  for(let i = 0; i < n; i++){
    for(let j = 0; j < n; j++){

      if(result[i][j] === 0){
        let nowClose = 0;
        for(let k = 0; k < 4; k++){
          const dx = nx[k] + j;
          const dy = ny[k] + i;
          if(dx >= 0 && dx < n && dy >= 0 && dy < n && favorites.includes(result[dy][dx])){
            nowClose += 1;
          }
        }
        if(nowClose > maxClose){
          favoritesList = [[i, j]]
          maxClose = nowClose;
        }else if(nowClose === maxClose){
          favoritesList.push([i,j]);
        }
      }
    }
  }

  if(favoritesList.length === 0){
    for(let i = 0; i < n; i++){
      for(let j = 0; j < n; j++){
        if(result[i][j] === 0){
          favoritesList.push([i,j])
        }
      }
    }
  }

  return favoritesList;
}

const findCloseBestBlank = (favoritesList) => {

  let maxClose = 0;
  let blankList = [];

  favoritesList.forEach(coord => {
    let nowClose = 0;
    const [i, j] = coord;
    for(let k = 0 ; k < 4; k++){
      const dx = nx[k] + j;
      const dy = ny[k] + i;

      if(dy >= 0 && dy < n && dx >= 0 && dx < n && result[dy][dx] === 0){
        nowClose += 1;
      }
    }
    if(maxClose < nowClose){
      blankList = [[i, j]];
      maxClose = nowClose;
    }else if(maxClose === nowClose){
      blankList.push([i, j]);
    }
  })

  return blankList;
}

const findLowCoord = (blankList) => {

  blankList.sort((a,b) => {
    if(a[0] === b[0]){
      return a[1] - b[1]
    }else{
      return a[0] - b[0]
    }
  })
  return blankList[0];
}


input.forEach(row => {
  const [student, ...favorites] = row;

  const favoritesList = findCloseFavorites(favorites);
  const blankList = findCloseBestBlank(favoritesList);
  const lowCoord = findLowCoord(blankList);


  const [y, x] = lowCoord
  result[y][x] = student;

})

let sum = 0;
let score = [0, 1, 10, 100, 1000]
input.forEach(row => {
  const [student, ...favorites] = row;
  
  for(let i = 0; i < n; i++){
    for(let j = 0; j < n; j++){
      
      if(result[i][j] === student){
        let cnt = 0;
        for(let k = 0 ; k < 4; k++){
          const dx = nx[k] + j;
          const dy = ny[k] + i;
    
          if(dy >= 0 && dy < n && dx >= 0 && dx < n && favorites.includes(result[dy][dx])){
            cnt += 1;
          }
        }
        sum += score[cnt]
      }
    }
  }
})

console.log(sum);
