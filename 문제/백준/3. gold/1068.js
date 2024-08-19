let [N, nodeList, removeNode] = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split("\n");
// let [N, nodeList, removeNode] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");

N = +N;
nodeList = nodeList.split(' ').map(Number)
removeNode = +removeNode;

let rootNode; 
const refineList = {};

for(let i = 0; i < N; i++){
  const value = nodeList[i];
  if(value === -1) rootNode = i;
  value in refineList ? refineList[value].push(i) : refineList[value] = [i];
}

let cnt = 0
const findLeaf = (parent) => {

  const child = refineList[parent]
  if(child && rootNode !== removeNode){
    child.forEach(childNode => {
      if(childNode !== removeNode){
        findLeaf(childNode)
      }else if(childNode === removeNode && child.length === 1){
        cnt += 1;
      }
    })
  }else if(child === undefined){
    cnt += 1;
  }
}

findLeaf(-1)
console.log(cnt)

