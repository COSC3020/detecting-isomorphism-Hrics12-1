// code.test.js

const jsc = require('jsverify');
const { areIsomorphic } = require('./graphUtils');

// Helper function to generate random graph
function generateRandomGraph() {
    const numVertices = Math.floor(Math.random() * 6) + 3;  // Random number of vertices between 3 and 8
    const vertices = Array.from({ length: numVertices }, (_, i) => String.fromCharCode(65 + i));  // Generate labels A, B, C, ...

    // Generate a list of random edges
    const edges = [];
    for (let i = 0; i < numVertices; i++) {
        for (let j = i + 1; j < numVertices; j++) {
            if (Math.random() > 0.5) {  // Randomly decide whether to add an edge
                edges.push([vertices[i], vertices[j]]);
            }
        }
    }

    return [vertices, edges];
}

// Property-based test for isomorphism
jsc.property('areIsomorphic should return true for isomorphic graphs', jsc.array(jsc.string), jsc.array(jsc.string), (vertices1, vertices2) => {
    if (vertices1.length !== vertices2.length) {
        return true;  // If the graphs have a different number of vertices, they cannot be isomorphic
    }

    const graph1 = [vertices1, generateRandomGraph()[1]]; // Random edges
    const graph2 = [vertices2, generateRandomGraph()[1]]; // Random edges

    // Check if the graphs are isomorphic
    return areIsomorphic(graph1, graph2);
});

jsc.property('areIsomorphic should return false for non-isomorphic graphs', jsc.array(jsc.string), jsc.array(jsc.string), (vertices1, vertices2) => {
    if (vertices1.length !== vertices2.length) {
        return true;  // If the graphs have a different number of vertices, they cannot be isomorphic
    }

    const graph1 = [vertices1, generateRandomGraph()[1]];  // Random edges
    const graph2 = [vertices2, generateRandomGraph()[1]];  // Random edges

    // Ensure that graphs are not isomorphic by adding a mismatch
    const mismatchedGraph = generateRandomGraph();
    graph2[1] = mismatchedGraph[1];  // Random mismatch in the edges

    // Check that the graphs are not isomorphic
    return !areIsomorphic(graph1, graph2);
});

// Testing for the edge case of empty graphs
jsc.property('areIsomorphic should return false for empty graphs', () => {
    const emptyGraph1 = [[], []]; // Empty graph
    const emptyGraph2 = [[], []]; // Empty graph

    return !areIsomorphic(emptyGraph1, emptyGraph2); // They should not be isomorphic
});

// Running the tests
jsc.check(jsc.properties);
