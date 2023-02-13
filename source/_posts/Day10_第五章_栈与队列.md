---
title: 栈与队列I
author: Craig
date: 2023-02-10 16:26:35
tags:  
- 栈
- 队列
categories:
- 随想录训练营
---
# Day10_第五章_栈与队列
[232_用栈实现队列](https://leetcode.cn/problems/implement-queue-using-stacks/)

[225_用队列实现栈](https://leetcode.cn/problems/implement-stack-using-queues/)

**队列, 先进先出; 栈, 先进后出**;
- Q1 C++中stack是容器吗;
  
  栈和队列是C++ STL(C++)标准库中的两个数据结构, 栈是以底层容器完成其所有的功能, 对外提供统一的接口, 底层容器是可插拔的, 我们可以控制使用哪一种容器来实现栈的功能;

  STL中栈不被归为容器, 而是容器适配器(cotainer adapter)
- 我们使用的stack属于哪个版本的STL;
  
  共有三个版本的STL;
  1. HP STL 其他版本的C++ STL; 以HP STL为蓝本实现出来的。
  2. P.J.Plauger STL;
  3. SGI STL, Silicon Graphics Computer Systems公司参照HP STL实现，
    
    栈和队列是SGI STL里面的数据结构
- stack提供迭代器来遍历stack空间吗?
  
  栈提供`push`,`pop`等接口,所有元素必须符合先进后出规则, 所以栈不提供走访功能, 也不提供迭代器。
- stack是如何实现的
  
  如果没有指定底层实现的话，默认是以`deque`为缺省情况下栈的底层结构。

  `deque`是一个双向的队列, 只要封住一段，只开通另一端就可以实现栈的逻辑。

我们也可以指定`vector`为栈的底层实现，初始化语句如下

    ```cpp
        std::stack<int, std::vector<int>> third;
    ```
队列中先进先出的数据结构, 同样不允许有遍历行为, 不提供迭代器, SGI STL中队列一样是以deque为缺省情况下的底部结构。

也可以指定vector为栈的底层实现，初始化语句如下

```cpp
    std::stack<int, std::vector<int>> third;
```
    
队列中先进先出的数据结构, 同样不允许有遍历行为, 不提供迭代器，
    
# 232_用栈实现队列
[题目链接](https://leetcode.cn/problems/implement-queue-using-stacks/)

使用栈来模拟队列的行为，就需要两个栈，一个输入栈，一个输出栈。
```cpp
class MyQueue {
public:
    stack<int> st_in;
    stack<int> st_out;
    MyQueue() {

    }
    void push(int x) {
        st_in.push(x);
    }
    int pop() {
        if(st_out.empty()) {
            while (!st_in.empty()) {
                st_out.push(st_in.top());
                st_in.pop();
            }
        }
        int ans;
        ans = st_out.top();
        st_out.pop();
        return ans;
    }
    int peek() {             //返回队列开头的元素
        int ans;
        ans = this->pop();
        st_out.push(ans);    //pop含税弹出了元素ans, 所以再添加回去;
        return ans;
    }
    bool empty() {
        return st_in.empty() && st_out.empty();
    }
};
```
pushu数据的时候, 只要数据放进输入栈就好, pop时, 如果st_out为空, 就把st_in**所有的数据都导入**进来, 再从st_out弹出数据。

如果输出栈不为空, 则直接从栈弹出数据。

`peed()`的实现复用了pop(),  

# 225_用队列实现栈
两个队列来模拟栈，没有输入输出关系，另一个队列完全用来备份；

```cpp
class MyStack {
public:
    queue<int> que1;
    queue<int> que2;
    MyStack() {
    }    
    void push(int x) {
        que1.push(x);
    }    
    int pop() {
        int size = que1.size();
        size--;
        while (size--) {
            que2.push(que1.front());
            que1.pop();
        }
        int ans = que1.front();
        que1.pop();
        swap(que1,que2);
        while(!que2.empty()) {
            que2.pop(); //清空que2；
        }
        return ans;
    }    
    int top() {
        return que1.back();
    }    
    bool empty() {
        return que1.empty();
    }
};
```
队列的操作有以下
- `front`   返回第一个元素，所有的删除都在第一个元素上进行
- `back`    返回最后一个元素，所有的插入操作都在后面的元素上执行

### 总结
队列和栈的操作还是要多熟悉熟悉;



  