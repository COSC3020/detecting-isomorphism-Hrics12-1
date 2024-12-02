const fs = require('fs');
const jsc = require('jsverify');

// Load the function from code.js
eval(fs.readFileSync('code.js') + '');

// Property-based test for graph isomorphism
const testGraphIsomorphism = jsc.forall("array array nat", function(graph1, graph2) {
    // Handle invalid graphs with fewer than 2 nodes or non-square adjacency matrices
    if (graph1.length < 2 || graph2.length < 2 || graph1.some(row => row.length !== graph1.length) || graph2.some(row => row.length !== graph2.length)) {
        return true; // Skip invalid graphs
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
