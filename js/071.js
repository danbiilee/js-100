const graph = {
  E: ['D', 'A'],
  F: ['D'],
  A: ['E', 'C', 'B'],
  B: ['A'],
  C: ['A'],
  D: ['E', 'F'],
};

const dfs = (graph, start) => {
  const visit = [];
  const stack = [start];

  while (stack.length !== 0) {
    const n = stack.pop();
    if (!visit.includes(n)) {
      visit.push(n);
      const sub = graph[n].filter(g => !visit.includes(g));
      for (let e of sub) {
        stack.push(e);
      }
    }
  }
  return visit;
};

console.log(dfs(graph, 'E'));
