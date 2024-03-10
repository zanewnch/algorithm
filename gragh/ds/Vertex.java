package algorithm.gragh.ds;

import java.util.List;

/**
 * 頂點
 */
public class Vertex {
    String name;
    List<Edge> edges;

    public Vertex(String name) {
        this.name = name;
    }

    public String getName() {
        return this.name;
    }

    public static void main(String[] args) {
        Vertex a = new Vertex("a");
        Vertex b = new Vertex("b");
        Vertex c = new Vertex("c");
        Vertex d = new Vertex("d");

        // a 這個vertex 有兩條邊(edge), 然後這兩條邊分別連接到 b and c
        a.edges = List.of(new Edge(b), new Edge(c));
        b.edges = List.of(new Edge(d));
        c.edges = List.of(new Edge(d));
        d.edges = List.of(); // empty set
    }
}