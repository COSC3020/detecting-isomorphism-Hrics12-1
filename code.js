are_isomorphic(graph1, graph2) {
    if (graph1.vertices.length !== graph2.vertices.length || graph1.edges.length !== graph2.edges.length) {
    return false;
}
    let adjMatrix1 = graph1.getAdjacencyMatrix();
    let adjMatrix2 = graph2.getAdjacencyMatrix();

    let perms = getAllPermutations(graph2.vertices)
    for (let permutation of perms) {
        let permMatrix = permuteMatrix(adjMatrix2,permutation);
        if(matricesAreEqual(permMatrix, adjMatrix1))
            return true;
    }
}
return false;
