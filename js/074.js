/*
이 두 정점으로 가기 위한 최대 거리를 구하고자 합니다.

최대 거리란, 정점의 중복 없이 한 정점에서 다른 정점까지 경유할 수 있는 가장 많은 간선의 수를 뜻합니다.

입력
1 7

출력
6
 */

const graph = {
  1: [2, 3, 4],
  2: [1, 3, 4, 5, 6],
  3: [1, 2, 7],
  4: [1, 2, 5, 6],
  5: [2, 4, 6, 7],
  6: [2, 4, 5, 7],
  7: [3, 5, 6],
};
const nodes = '1 7'.split(' ');

function dfs(graph) {
  const visited = [nodes[0]];
  const stack = [nodes[0]];
  let count = -1;

  while (stack.length > 0) {
    for (let i = 0; i < stack.length; i++) {
      count++;
      const n = stack.pop();
      if (n === nodes[1]) {
        return count;
      }
      const sub = graph[n].filter((g) => !visited.includes(g));
      for (let s of sub) {
        visited.push(s);
        stack.push(s);
      }
    }
  }
  return count;
}

console.log(dfs(graph));
