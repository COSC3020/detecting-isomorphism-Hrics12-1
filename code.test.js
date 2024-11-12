const { are_isomorphic } = require('./code'); // replace 'file' with the actual file name

test('graphs with different number of vertices are not isomorphic', () => {
    let graph1 = { vertices: [1, 2, 3], edges: [[1, 2], [2, 3]], degree: v => 2 };
    let graph2 = { vertices: [1, 2], edges: [[1, 2]], degree: v => 1 };
    expect(are_isomorphic(graph1, graph2)).toBe(false);
});

test('graphs with different number of edges are not isomorphic', () => {
    let graph1 = { vertices: [1, 2, 3], edges: [[1, 2], [2, 3]], degree: v => 2 };
    let graph2 = { vertices: [1, 2, 3], edges: [[1, 2]], degree: v => 1 };
    expect(are_isomorphic(graph1, graph2)).toBe(false);
});

test('graphs with vertices of different degrees are not isomorphic', () => {
    let graph1 = { vertices: [1, 2, 3], edges: [[1, 2], [2, 3]], degree: v => v === 2 ? 2 : 1 };
    let graph2 = { vertices: [1, 2, 3], edges: [[1, 2], [2, 3]], degree: v => 2 };
    expect(are_isomorphic(graph1, graph2)).toBe(false);
});

test('isomorphic graphs are recognized as such', () => {
    let graph1 = { vertices: [1, 2, 3], edges: [[1, 2], [2, 3]], degree: v => 2 };
    let graph2 = { vertices: [1, 2, 3], edges: [[1, 2], [2, 3]], degree: v => 2 };
    expect(are_isomorphic(graph1, graph2)).toBe(true);
});
