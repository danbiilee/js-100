/*
�� �� �������� ���� ���� �ִ� �Ÿ��� ���ϰ��� �մϴ�.

�ִ� �Ÿ���, ������ �ߺ� ���� �� �������� �ٸ� �������� ������ �� �ִ� ���� ���� ������ ���� ���մϴ�.

�Է�
1 7

���
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
