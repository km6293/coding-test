function solution(numbers, hand) {

  const obj = {
    '1' : { '2' : 1, '5' : 2, '8' : 3, '0' : 4 },
    '2' : { '2' : 0, '5' : 1, '8' : 2, '0' : 3 },
    '3' : { '2' : 1, '5' : 2, '8' : 3, '0' : 4 },
    '4' : { '2' : 2, '5' : 1, '8' : 2, '0' : 3 },
    '5' : { '2' : 1, '5' : 0, '8' : 1, '0' : 2 },
    '6' : { '2' : 2, '5' : 1, '8' : 2, '0' : 3 },
    '7' : { '2' : 3, '5' : 2, '8' : 1, '0' : 2 },
    '8' : { '2' : 2, '5' : 1, '8' : 0, '0' : 1 },
    '9' : { '2' : 3, '5' : 2, '8' : 1, '0' : 2 },
    '0' : { '2' : 3, '5' : 2, '8' : 1, '0' : 0 },
    '*' : { '2' : 4, '5' : 3, '8' : 2, '0' : 1 },
    '#' : { '2' : 4, '5' : 3, '8' : 2, '0' : 1 }
  }
  const fixObj = {
    '1' : 'L', '4' : 'L', '7' : 'L', '*' : 'L',
    '3' : 'R', '6' : 'R', '9' : 'R', '#' : 'R'
  }

  let [leftVal, rightVal, str] = ['*','#',''];
  numbers.forEach(e => {
    if(fixObj.hasOwnProperty(e)){
      str += fixObj[e];
      fixObj[e] == 'L' ? leftVal = e : rightVal = e;
    }else{
      if(obj[leftVal][e] < obj[rightVal][e]){
        str += 'L';
        leftVal = e;
      }else if(obj[leftVal][e] > obj[rightVal][e]){
        str += 'R';
        rightVal = e;
      }else{
        if(hand == 'left'){
          str += 'L';
          leftVal = e;
        }else{
          str += 'R';
          rightVal = e;
        }
      }
    }
  })
  return str
}


// console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5],	"right"),	"LRLLLRLLRRL");
// console.log(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2],	"left"),	"LRLLRRLLLRR");
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0],	"right"),	"LLRLLRLLRL");




