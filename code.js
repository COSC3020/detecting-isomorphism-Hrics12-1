function areIsomorphic(graph1, graph2) {

    if (graph1.length === 0||graph2.length === 0){
    retunr false;
    }   //should probably check for empty graphs
    
    if (graph1.length !== graph2.length) {
        return false;
    }

    const matrix = toAdjMatrix(graph1);
    return permute(matrix, graph2, 0);
}

function permute(matrix, graph, lo) {
    
    let vertices = graph[0];
    if (vertices.length === 0) return false;
    if (matricesEqual(matrix, toAdjMatrix(graph))) return true;
    if (lo >= vertices.length - 1) return false;
    for (let i = lo; i < vertices.length; i++) {
        if (i != lo) {
            swap(vertices, lo, i);
            graph[0] = vertices;
        }
        if (permute(matrix, graph, lo + 1)) return true;
        if (i != lo) {
            swap(vertices, lo, i);
            graph[0] = vertices;
        }
    }
    return false;
}

function swap(arr, lo, i) {
    let tmp = arr[lo];
    arr[lo] = arr[i];
    arr[i] = tmp;
}

function toAdjMatrix(graph) {
    let [vertices, edges] = graph;
    if (vertices.length === 0) return [];
    let adjMatrix = Array.from({ length: vertices.length }, () => Array(vertices.length).fill(0));
    edges.forEach(([v1, v2]) => {
        adjMatrix[vertices.indexOf(v1)][vertices.indexOf(v2)] = 1;
        adjMatrix[vertices.indexOf(v2)][vertices.indexOf(v1)] = 1;
    });
    return adjMatrix;
}

function matricesEqual(m1, m2) {
    if (m1.length !== m2.length) return false;
    for (let i = 0; i < m1.length; i++) {
        for (let j = 0; j < m1[i].length; j++) {
            if (m1[i][j] !== m2[i][j]) return false;
        }
    }
    return true;
}
