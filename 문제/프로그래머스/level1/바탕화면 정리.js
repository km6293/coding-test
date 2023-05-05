function solution(arr) {
  let [right, left, down, up] = [0, 99, 0, 99];
  for(let i = 0 ; i < arr.length; i++){
      for(let r = 0; r < arr[0].length; r++){
          if(arr[i][r] == '#'){
              if(r < left) left = r;
              if(r+1 > right) right = r+1;
              if(i < up) up = i;
              if(i+1 > down) down = i+1;                
          }
      }
  }
  return [up,left,down,right]
}