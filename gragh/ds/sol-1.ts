class Vertex {
    name: string;
    edges: Edge[];

    constructor(name: string) {
        this.name = name;
        this.edges = [];
    }
}

class Edge {
    linked: Vertex;
    weight: number;

    constructor(linked: Vertex, weight: number = 0) {
        this.linked = linked;
        this.weight = weight;
    }
}

// Usage
let a = new Vertex("a");
let b = new Vertex("b");
let c = new Vertex("c");
let d = new Vertex("d");

// a 這個vertex 有兩條邊(edge), 然後這兩條邊分別連接到 b and c
a.edges = [new Edge(b), new Edge(c)];
b.edges = [new Edge(d)];
c.edges = [new Edge(d)];
d.edges = []; // empty set