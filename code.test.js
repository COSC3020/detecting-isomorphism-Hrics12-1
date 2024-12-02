const fs = require('fs');
const jsc = require('jsverify');


eval(fs.readFileSync('./code.js') + '');

// Test cases
const pentagon = [
     // Vertices
    [0, 1, 2, 3, 4], 
    // Edges
    [      
        [0, 1], 
        [1, 2],
        [2, 3],
        [3, 4],
        [4, 0],
    ],
];

const star = [
    [0, 1, 2, 3, 4], 
    [
        [0, 2], 
        [2, 4],
        [4, 1],
        [1, 3],
        [3, 0],
    ],
];

const empty = [[], []];
const line = [
    [0, 1, 2], 
    [
        [0, 1], 
        [1, 2],
    ],
];

const square = [
    [0, 1, 2, 3], 
    [
        [0, 1], 
        [1, 2],
        [2, 3],
        [3, 0],
    ],
];

const hourglass = [
    [0, 1, 2, 3], 
    [
        [0, 2], 
        [2, 3],
        [3, 1],
        [1, 0],
    ],
];

const disconnected = [
    [0, 1, 2], 
    [] 
];

const singleVertex = [
    [0], 
    [] 
];

const triangle = [
    [0, 1, 2], 
    [
        [0, 1], 
        [1, 2],
        [2, 0],
    ],
];

const bipartite = [
    [0, 1, 2, 3], 
    [
        [0, 2], 
        [0, 3],
        [1, 2],
        [1, 3],
    ],
];

// Test cases with expected results
const testCases = [
    { graph1: pentagon, graph2: star, expected: true }, 
    { graph1: empty, graph2: line, expected: false }, 
    { graph1: pentagon, graph2: line, expected: false }, 
    { graph1: square, graph2: hourglass, expected: true }, 
    { graph1: square, graph2: pentagon, expected: false }, 
    { graph1: disconnected, graph2: singleVertex, expected: false }, 
    { graph1: singleVertex, graph2: singleVertex, expected: true }, 
    { graph1: triangle, graph2: square, expected: false }, 
    { graph1: triangle, graph2: triangle, expected: true }, 
    { graph1: bipartite, graph2: line, expected: false }, 
];

function runTests() {
    console.log("Running tests...");
    
    // Initialize a flag to track if all tests pass
    let allPassed = true;

    // Loop through each test case
    testCases.forEach(({ graph1, graph2, expected }, index) => {
        
      // Run the 'are_isomorphic' function
        const result = are_isomorphic(graph1, graph2);

        // Check if the result matches the expected outcome
        if (result !== expected) {
            
            // Log failure details if the result doesn't match
            console.error(`Test Case ${index + 1} failed. Expected: ${expected}, Got: ${result}`);
            allPassed = false; 
        } else {
            
            // Log success for the current test case
            console.log(`Test Case ${index + 1} passed.`);
        }
    });

    if (allPassed) {
        
        // Log success if all tests passed
        console.log("All tests passed!");
    } else {
        
        // Log failure if any test failed
        console.error("Test has failed.");
    }
}

runTests();
