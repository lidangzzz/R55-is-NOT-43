我一直想找个randomized的方法来解决Ramsey Number中R(5,5)的下限问题。我记录一下我的几个基本初衷吧。

1. R(m,n)=k的定义是，寻找一个最小的正整数k，使得对于k个点的全部图，其中至少有m个点组成independent set，有n个点是clique（另外有两种表述方式，一种表述是，对于k个点生成的complete graph进行红蓝染色，m个点是红色clique，n个点是蓝色clique；Ramsey原文表述是，k个人中必定有m个互相认识或者n个人互相不认识）。

2. 大部分proof-based的工作都是求上限，很少有人在这个问题上往上推下限。已知的R(5,5)的下限是43。我的初衷是brute force爆破所有43点的图，如果找不出m>5的特例（如果一个图中m>5，那么必定会有一个互补的图符合n>5），那么R(5,5)=43就可以得到证明。

然而事实证明这个approach依然是不靠谱的，因为所有43-node的图的数量还是太高了，如果没有10^N的数量级的剪枝方法的话，用地球上所有计算资源都是几乎跑不完的。

所以我转向了randomized的方法：如果仅有有限的计算资源的话，在一个无限的循环中，随机生成一个43-node的图并随机染色，如果m<5 && n<5，那么可以成功证明R(5,5)>=44上；如果经过一段时间依然找不到，

3. 我开始看BOINC，目前最常用的一个volunteer computing框架，有Windows客户端，有Android客户端。这个框架非常老，有很多人在用这个框架做计算生物，也有一些人在解决一些类似的数学问题。简单来说就是让志愿者下载安装，然后把开发者的程序部署进来，持续运算。

但是我发现BOINC这个框架并不友好，文档看得我一头雾水，用起来也各种麻烦费事，于是我开始试着用Hedgehog Lab来写一个简单的、好用的volunteer computing的框架。简单来说就是，我写了半个network graph库（ https://github.com/Hedgehog-Computing/Hedgehog-Network ），然后用户可以很轻松地把一些函数零安装、零配置地import进来（ https://github.com/lidangzzz/R55-is-NOT-43/blob/main/lets-find-ramsey-5-5-now.js ）

*importHedgehog-Network: generateRamdomUndirectedGraph, complementUndirectedGraph, matrix2edgeSet, maxOrderOfClique

这样当用户寻找到一个m<5 && n<5的图的时候，直接send到google cloud上的function，判断一下即可放入数据库中。

优点：

1. 绝对意义上的跨平台，当用户点进[https://hedgehog-lab.github.io/?your_url=https://raw.githubusercontent.com/lidangzzz/R55-is-NOT-43/main/lets-find-ramsey-5-5-now.js&auto_run=true](https://hedgehog-lab.github.io/?your_url=https://raw.githubusercontent.com/lidangzzz/R55-is-NOT-43/main/lets-find-ramsey-5-5-now.js&auto_run=true) 的时候，就可以自动下载script，自动运行，自动把结果上传上去，而且一次编写、任何windows/macos/ios/android上都可以运行，用户只要保持浏览器打开即可，不需要安装配置任何东西，想停止也只需要关掉网页即可；

2. 代码量很低，很直观。总共代码不超过100行，配置运行都比BOINC简单方便。

缺点：

因为没有合适的剪枝方法，所以碰撞到正确的R(5,5)!=43的反例机会很低，几乎依然相当于大海捞针。鉴于我周围做数学的人对于这个问题关注度很低，有了解Ramsey Number的人对于剪枝和计算的方法几乎不抱期望，所以目前暂时没有其他任何进展。
