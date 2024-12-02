// areIsomorphic.test.js
const { areIsomorphic } = require('./areIsomorphic'); // Assuming your function is in this file

describe('Graph Isomorphism Tests', () => {
  test('Test for isomorphic graphs', () => {
    const graph1 = [
      ['a', 'b', 'c'], // Vertices
      [['a', 'b'], ['b', 'c'], ['a', 'c']] // Edges
    ];

    const graph2 = [
      ['1', '2', '3'],
      [['1', '2'], ['2', '3'], ['1', '3']]
    ];

    expect(areIsomorphic(graph1, graph2)).toBe(true);
  });

  test('Test for non-isomorphic graphs', () => {
    const graph1 = [
      ['a', 'b', 'c'], // Vertices
      [['a', 'b'], ['a', 'c']] // Edges
    ];

    const graph2 = [
      ['1', '2', '3'],
      [['1', '2'], ['2', '3']]
    ];

    expect(areIsomorphic(graph1, graph2)).toBe(false);
  });

  test('Test for empty graphs', () => {
    const graph1 = [[], []]; // No vertices, no edges
    const graph2 = [[], []]; // No vertices, no edges

    expect(areIsomorphic(graph1, graph2)).toBe(true);
  });

  test('Test for graphs with different sizes', () => {
    const graph1 = [
      ['a', 'b'], // Vertices
      [['a', 'b']] // Edges
    ];

    const graph2 = [
      ['1', '2', '3'],
      [['1', '2'], ['2', '3'], ['3', '1']] // Extra edge
    ];

    expect(areIsomorphic(graph1, graph2)).toBe(false);
  });

  test('Test for graphs with the same structure but different labels', () => {
    const graph1 = [
      ['a', 'b', 'c'],
      [['a', 'b'], ['b', 'c'], ['a', 'c']]
    ];

    const graph2 = [
      ['1', '2', '3'],
      [['1', '2'], ['2', '3'], ['1', '3']]
    ];

    expect(areIsomorphic(graph1, graph2)).toBe(true);
  });
});
