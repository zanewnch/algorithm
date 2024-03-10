package algorithm.gragh.ds;

/**
 * 邊
 */
public class Edge {
    // 這是有向圖 這邊的linked 是指向鏈接到的vertex 
    private Vertex linked;
    private int weight;

    public Edge(Vertex linked) {
        this.linked = linked;
    }

    public Edge(Vertex linked, int weight) {
        this.linked = linked;
        this.weight = weight;
    }
}
