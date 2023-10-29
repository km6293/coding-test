// 핵심 키워드 : 노드 , 간선, 최단 경로
// 최단 경로가 제일 큰 경우의 집합을 구하는 문제

function solution(n, edge){
  const graph = Array.from(Array(n + 1), () => []);

  for(const [src, dest] of edge){
    graph[src].push(dest);
    graph[dest].push(src);
  }

  // 각 정점의 배열
  const distance = Array(n + 1).fill(0);
  distance[1] = 1;

  // BFS
  const queue = [1];
  while(queue.length > 0){
    // shift는 O(n)이지만, 요소가 적을 경우에는 자바스크립트 엔진에서 최적화를 해준다.
    // 즉, 요소 적을 경우 -> shift , 요소가 클 경우 -> 직접 구현
    const src = queue.shift(); 
    for(const dest of graph[src]){
      if(distance[dest] === 0){
        queue.push(dest);
        distance[dest] = distance[src] + 1;
      }
    }
  }
  const max = Math.max(...distance);
  return distance.filter(e => e === max).length;
}

console.log(solution(6, [[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]]));