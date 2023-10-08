// 다익스트라 알고리즘 함수
function dijkstra(graph, startVertex) {
  const distances = {};
  const visited = {};
  const queue = [];

  // 모든 정점의 거리를 무한대로 초기화
  for (let vertex in graph.vertices) {
    distances[vertex] = Infinity;
  }
  // 첫값 초기화
  distances[startVertex] = 0;

  queue.push({ vertex: startVertex, distance: 0 });
  while (queue.length > 0) {
    queue.sort((a, b) => a.distance - b.distance);

    const { vertex, distance } = queue.shift();
    // true 라면 다음으로 while문으로 넘어가기
    if (visited[vertex]) continue;
    visited[vertex] = true;

    // object안에 있는 vertex 다 돌기
    for (let neighbor in graph.vertices[vertex]) {
      const newDistance = distance + graph.vertices[vertex][neighbor];
      console.log(neighbor, vertex, distance, newDistance)
      if (newDistance < distances[neighbor]) {
        distances[neighbor] = newDistance;
        queue.push({ vertex: neighbor, distance: newDistance });
      }
    }
  }

  return distances;
}

// 예시 그래프
let graph = {
  vertices : {
    1 : {2 : 2, 3 : 3},
    2 : {3 : 4, 4 : 5},
    3 : {4 : 6},
    4 : {},
    5 : {1 : 1}
  }
}

let value = dijkstra(graph, "1")

for(let key in value){
  console.log(value[key])
}