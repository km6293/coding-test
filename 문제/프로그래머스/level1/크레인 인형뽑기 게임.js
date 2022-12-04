function solution(board, moves) {

  let [cnt, n, arr] = [0, board.length, []];
  moves.forEach(e => {
    let chkBoard = 0;
    for(let i = 0; i < n; i++){ 
      if(board[i][e-1] != 0) {
        if(arr[arr.length-1] == board[i][e-1]){
          cnt += 2;
          arr.pop();
        }else{
          arr.push(board[i][e-1])
        }
        board[i][e-1] = 0;
        break;
      }
    }
  })
  return cnt
}

console.log(solution([[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]], [1,5,3,5,1,2,1,4]),	4)