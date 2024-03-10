// directed
// undirected
// weighted
// path 
// cycle(edge points to the same vertex)

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

let a = new Vertex("A");
let b = new Vertex("B");
let c = new Vertex("C");
let d = new Vertex("D");
let e = new Vertex("E");
let f = new Vertex("F");
let g = new Vertex("G");

// A 這個vertex 有兩條邊(edge), 然後這兩條邊分別連接到 B and C
a.edges = [new Edge(b, 5), new Edge(c, 3)];
// B 這個vertex 有兩條邊(edge), 然後這兩條邊分別連接到 D and E
b.edges = [new Edge(d, 6), new Edge(e, 2)];
// C 這個vertex 有一條邊(edge), 這條邊連接到 F
c.edges = [new Edge(f, 4)];
// D 這個vertex 有一條邊(edge), 這條邊連接到 G
d.edges = [new Edge(g, 1)];
// E, F, G 這些vertex 沒有邊
e.edges = [];
f.edges = [];
g.edges = [];

