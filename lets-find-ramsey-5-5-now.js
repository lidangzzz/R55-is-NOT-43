*import Hedgehog-Network: generateRamdomUndirectedGraph, complementUndirectedGraph, matrix2edgeSet,  maxOrderOfClique
*import https://raw.githubusercontent.com/lidangzzz/R55-is-NOT-43/main/report_to_lidang.js

// Define M, N, number of vertices K
K = 43
M = 5
N = 5


tic();
// Continuously generate a random graph and verify it
while (true){
    
    // generate a random graph in matrix format, and complement graph in matrix format
    graphMatrix = generateRamdomUndirectedGraph(K)
    complementGraphMatrix = complementUndirectedGraph(graphMatrix)

    // convert the graph from matrix to edge set, and find the max clique and independent set
    // using Bron Kerbosch algorithm
    maxClique = maxOrderOfClique(matrix2edgeSet(graphMatrix))
    maxIndependentSet = maxOrderOfClique(matrix2edgeSet(complementGraphMatrix))

    // If we find a valid K-node graph which satisfy:
    // num(clique) < M and num(independentSet) < N,
    // break the loop and print the result
    if (maxClique < M && maxIndependentSet < N )
    {
        tex`\text{A possible graph is: } V = ${mat(graphMatrix)}`
        print("max clique = " + maxClique );
        print("max independeny set = " + maxIndependentSet );
        print("The edge set is: ")
        printEdges(matrix2edgeSet(graphMatrix))
        break;
    }
    
    // And don't forget to share it with Lidang!!!
    report_to_lidang(graphMatrix);
}
toc();

function printEdges(edgeSet){
    ret = "";
    edgeSet.forEach(edge=> {ret+= "[" + edge[0] + ", " + edge[1] + "] "})
    print(ret);
} 
