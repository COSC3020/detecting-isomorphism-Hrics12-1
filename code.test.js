const fs = require('fs');
const jsc = require('jsverify');

// Evaluate the code.js file, which contains the areIsomorphic function
eval(fs.readFileSync('code.js') + '');

// Helper function to generate random graphs
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
const testIsomorphism = jsc.forall("array array nat", function(vertices1, vertices2) {
    if (vertices1.length !== vertices2.length) {
        return true;  // If the graphs have a different number of vertices, they cannot be isomorphic
    }

    // Generate random edges for both graphs
    const graph1 = [vertices1, generateRandomGraph()[1]];  // Random edges for graph1
    const graph2 = [vertices2, generateRandomGraph()[1]];  // Random edges for graph2

    // Check if the graphs are isomorphic
    const result = areIsomorphic(graph1, graph2);

    // If the graphs have the same number of vertices and edges, check if the result is correct
    return result === (vertices1.sort().join('') === vertices2.sort().join(''));
});

// Run the test
jsc.assert(testIsomorphism);
