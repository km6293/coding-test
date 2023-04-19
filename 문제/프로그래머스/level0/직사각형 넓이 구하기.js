function solution(arr){
  let [wArr,hArr] = [[],[]];
  arr.map(e => {
    if(!wArr.includes(e[0])) wArr.push(e[0])
    if(!hArr.includes(e[1])) hArr.push(e[1])
  })
  let [width, height] =  [0,0];
  width = wArr[0] * wArr[1] < 0 ? Math.abs(wArr[0]) + Math.abs(wArr[1]) : Math.abs(wArr[0] - wArr[1])
  height = hArr[0] * hArr[1] < 0 ? Math.abs(hArr[0]) + Math.abs(hArr[1]) : Math.abs(hArr[0] - hArr[1])
  return width * height
}
console.log(solution([[1, 1], [2, 1], [2, 2], [1, 2]]), 1)
// console.log(solution([[-1, -1], [1, 1], [1, -1], [-1, 1]]), 4)