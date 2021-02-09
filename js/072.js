const graph = {
  E: ["D", "A"],
  F: ["D"],
  A: ["E", "C", "B"],
  B: ["A"],
  C: ["A"],
  D: ["E", "F"],
};

const bfs = (graph, start) => {
  const visitied = [];
  const queue = [start];

  while (queue.length > 0) {
    const n = queue.shift();
    if (!visitied.includes(n)) {
      visitied.push(n);
      const sub = graph[n].filter((node) => !visitied.includes(node));
      for (let s of sub) {
        queue.push(s);
      }
    }
  }
  return visitied;
};

console.log(bfs(graph, "E"));
