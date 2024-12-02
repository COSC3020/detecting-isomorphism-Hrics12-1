# Graph Isomorphism

Devise an algorithm to determine whether two given graphs are isomorphic or not.
It takes two graphs as an argument and returns `true` or `false`, depending on
whether the graphs are isomorphic or not. Your algorithm needs to handle both
the case where the two graphs are isomorphic and where they are not isomorphic.

Hint: Your algorithm does not need to be the best possible algorithm, but should
avoid unnecessarily repeating work.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

## Runtime Analysis

What is the worst-case big $\Theta$ time complexity of your algorithm?

There's a constant time to check if the graphs are empty or not. The toAdjMatrix function convert the graph into an adjaceny matrix where n is the verticies in the graph. Making the adj matrix takes $O(n^2)$ time because it iterates over all the edges. The worst case for permute is if it checks all the possible permutations in the second graph, for $n$ vertices there would be $n!$ permutations. So, each recursive call check the permutation to match the adj matrix in graph1. Then for each permutation the matricesEqual function is called and compares the two matrices $n*n$. This takes $O(n^2)$ time. The worst time would be $O(n^2)$ for making the adjaceny matrix, $O(n!*n^2)$ for the permutations and comparing the matrices. So, $\Theta(n!*n^2)$ would be the worst time complexity for this algorithm.


https://stackoverflow.com/questions/13694201/find-out-if-graph-is-isomorphic-java
This video was super helpful:
https://youtu.be/UCle3Smvh1s?feature=shared
https://www.baeldung.com/cs/adjacency-matrix-list-complexity
|
I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice
