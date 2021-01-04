# Ramsey Number R(5,5) is NOT 43 (R55-is-NOT-43)
- Let's try to solve the 100-year-old math problem: **The Ramsey Number: R(5,5) ≠ 43** together!
- Let's build **The Easiest** volunteer computing framework in **30 lines of code**!
- Let's build **The Real cross-platform** volunteer computing client code  which **EXECUTING TOTALLY IN YOUR BROWSER** without installation or configuration -- just open and run!
- Let's build a serverless Google Cloud Function as a server for volunteer computing framework in **30 lines of code**!
- Let's solve the great math problem together!

# 1. What is Ramsey Number?

Ramsey number is math problem that finding the minimum number of vertices k = R(m,n) so that any undirected graph with k vertices always contains a clique of m or an independent set of m. 

Current roadmap of Ramsey Numbers on Wolfram: [https://mathworld.wolfram.com/RamseyNumber.html](https://mathworld.wolfram.com/RamseyNumber.html)

# 2. What is latest updates on R(5,5)?

R(5,5) is the next Ramsey number with m=n that is not totally solved yet. Here are the latest updates:

* In 1989, [Geoffrey Exoo](http://isu.indstate.edu/ge/) found the lower bound of R(5,5)>=43 at 1989. 
* In 2019, Vigleik Angeltveit and Brendan D. Mckay found the upper bound of R(5,5)<=48 at [https://arxiv.org/pdf/1703.08768.pdf](https://arxiv.org/pdf/1703.08768.pdf). 
* The latest update about upper bound of Ramsy number is from [Ashwin Sah](http://www.mit.edu/~asah/) at [https://arxiv.org/pdf/2005.09251.pdf](https://arxiv.org/pdf/2005.09251.pdf). 

# 3. What's the idea of this project? 

The time complexity is extremely huge to go through every single nonisomorphic graph with 43 vertices. [Brendan McKay](https://cs.anu.edu.au/~bdm/) mentioned that [it takes 10^60 years with a brute-force method](https://mathoverflow.net/questions/210653/algorithms-for-calculating-r5-5-and-r6-6). So we want to try another volunteer-computing approach. For each volunteer:

1. Generate a random graph G with 43 vertices randomly;
2. Find the maximum clique number m;
3. Find the maximum independent set n;
4. If m<5 and n<5, return the graph G.

Still the probablity of finding valid graph that prove R(5,5) ≠ 43 is extremely small, but from the perspective of volunteer-computing, it's much easier than the traversal of all graph networks.

# 4. 
