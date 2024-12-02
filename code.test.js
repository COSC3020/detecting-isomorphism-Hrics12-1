const fs = require('fs');
const jsc = require('jsverify');

// Load the function from code.js
eval(fs.readFileSync('code.js') + '');

// Property-based test for graph isomorphism
const testGraphIsomorphism = jsc.forall("array array nat", function(graph1, graph2) {
    // Ensure graph1 and graph2 follow the correct structure: [vertices, edges]
    if (!Array.isArray(graph1) || !Array.isArray(graph2)) {
        return true; // Skip invalid graphs that are not arrays
    }

    const isValidGraph = (graph) => {
        // Ensure the graph has two elements: vertices and edges
        if (graph.length !== 2) return false;

        const [vertices, edges] = graph;

        // Ensure vertices is an array and has at least one element
        if (!Array.isArray(vertices) || vertices.length === 0) return false;

        // Ensure edges is an array of pairs, where each pair has two elements
        if (!Array.isArray(edges) || edges.some(edge => !Array.isArray(edge) || edge.length !== 2)) {
            return false;
        }

        return true;
    };

    // Skip the test if any of the graphs is invalid
    if (!isValidGraph(graph1) || !isValidGraph(graph2)) {
        return true;
    }

    // Ensure that both graphs have the same number of vertices
    if (graph1[0].length !== graph2[0].length) {
        return false; // If the graphs have different numbers of vertices, they cannot be isomorphic
    }

    // Run the areIsomorphic function
    const result = areIsomorphic(graph1, graph2);

    // The result should be true or false (isomorphism check)
    return typeof result === 'boolean';
});

// Run the test
jsc.assert(testGraphIsomorphism);
