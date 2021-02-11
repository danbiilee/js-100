/*
두 정점 사이를 이동할 수 있는 최단 거리를 출력.
최단 거리란, 정점의 중복 없이 
한 정점에서 다른 정점까지 갈 수 있는 가장 적은 간선의 수를 의미

입력
A F

출력
2
 */

const graph = {
  A: ["B", "C"],
  B: ["A", "D", "E"],
  C: ["A", "F"],
  D: ["B"],
  E: ["B", "F"],
  F: ["C", "E"],
};
const nodes = "A F".split(" ");

const bfs = (graph, nodes) => {
  const visited = [nodes[0]];
  const queue = [nodes[0]];
  let count = -1;

  while (queue.length > 0) {
    count++;

    for (let i = 0; i < queue.length; i++) {
      const n = queue.shift();
      if (n === nodes[1]) {
        return count;
      }
      const sub = graph[n].filter((g) => !visited.includes(g));
      for (let s of sub) {
        visited.push(s);
        queue.push(s);
      }
    }
  }
  return count;
};

console.log(bfs(graph, nodes));
