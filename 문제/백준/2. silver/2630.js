let [N, ...input] = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split('\n')
// let [N, ...input] = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n')

input = input.map(e => e.trim())

let map = input.map(e => e.split(' ').map(Number))
let [w, b] = [0, 0];

function chk(arr, val){

  if(arr.every(row => row.every(value => value === arr[0][0]))){
    arr[0][0] === 0 ? w += 1 : b += 1;
  }else{
    let [a,b,c,d] = [[],[],[],[]];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (i < val && j < val) {
          if (!a[i]) a[i] = [];
          a[i][j] = arr[i][j];
        } else if (i < val && j >= val) {
          if (!b[i]) b[i] = [];
          b[i][j - val] = arr[i][j];
        } else if (i >= val && j < val) {
          if (!c[i - val]) c[i - val] = [];
          c[i - val][j] = arr[i][j];
        } else {
          if (!d[i - val]) d[i - val] = [];
          d[i - val][j - val] = arr[i][j];
        }
      }
    }
    chk(a,val/2)
    chk(b,val/2)
    chk(c,val/2)
    chk(d,val/2)
  }
}

chk(map, N/2)

console.log(w)
console.log(b)