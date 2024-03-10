// @ts-ignore
class Vertex {
  public name: string | number;
  public edges: Edge[];
  public visited: boolean; // Add the 'visited' property
  constructor(name: string | number) {
    this.name = name;
    this.edges = [];
    this.visited = false;
  }
}

// @ts-ignore
class Edge {
  linked: Vertex;
  weight: number;
  constructor(linked: Vertex, weight: number = 0) {
    this.linked = linked;
    this.weight = weight;
  }
}

let a = new Vertex("A");
let b = new Vertex("B");
let c = new Vertex("C");
let d = new Vertex("D");
let e = new Vertex("E");
let f = new Vertex("F");
let g = new Vertex("G");

a.edges = [new Edge(b, 5), new Edge(c, 3)];
b.edges = [new Edge(d, 6), new Edge(e, 2)];
c.edges = [new Edge(f, 4)];
d.edges = [new Edge(g, 1)];
e.edges = [];
f.edges = [];
g.edges = [];

const dfs = (vertex: Vertex): (string | number)[] => {
  let result: (string | number)[] = [];

  vertex.visited = true;
  result.push(vertex.name);

  vertex.edges.forEach((edge) => {
    if (!edge.linked.visited) {
      result = result.concat(dfs(edge.linked));
    }
  });

  return result;
};

console.log(dfs(a));

// bfs 不需要使用到recursion
const bfs = (start: Vertex): (string | number)[] => {
  let result: (string | number)[] = [];
  let queue: Vertex[] = [];

  start.visited = true;
  queue.push(start);

  while (queue.length > 0) {
    let currentVertex = queue.shift(); // Remove the first vertex from the queue
    if (currentVertex) {
      result.push(currentVertex.name); // Add the name of the current vertex to the result
      currentVertex.edges.forEach((edge) => {
        if (!edge.linked.visited) {
          edge.linked.visited = true;
          queue.push(edge.linked); // Add unvisited vertices to the end of the queue
        }
      });
    }
  }

  return result;
};

const bfsPrac1 = (vertex:Vertex):(string|number)[]=>{
    let result:(string|number)[] = [];
    let queue:Vertex[] = [];

    vertex.visited = true;
    queue.push(vertex);

    while(queue.length>0){
        let currentVertex = queue.shift();
        if(currentVertex){
            result.push(currentVertex.name);

            currentVertex.edges.forEach(edge=>{
                if(!edge.linked.visited){
                    edge.linked.visited = true;
                    queue.push(edge.linked);
                }
            })
        }
    }
    return result;
}


console.log(bfs(a)); // Call the bfs function with vertex 'a' as the starting point
