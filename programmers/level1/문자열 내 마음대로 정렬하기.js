function solution(arr, n){
  arr.sort(function(a,b){
    if(a[n] > b[n]) return 1
    if(a[n] < b[n]) return -1
    if(a[n] == b[n]) return a > b ? 1 : -1
  })
  return arr;
}

console.log(solution(["sun", "bed", "car"],1))
console.log(solution(["abce", "abcd", "cdx"],2))
