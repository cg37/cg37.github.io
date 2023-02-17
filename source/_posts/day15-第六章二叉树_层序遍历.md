---
title: day15_第六章二叉树
date: 2023-02-16 23:20:22
tags:
excerpt:
author:
---
- [102_二叉树的层序遍历](https://leetcode.cn/problems/binary-tree-level-order-traversal/)
- [107_二叉树的层次遍历II](https://leetcode.cn/problems/binary-tree-level-order-traversal-ii/)
- [199_二叉树的右视图](https://leetcode.cn/problems/binary-tree-right-side-view/)
- [637_二叉树的层平均值](https://leetcode.cn/problems/average-of-levels-in-binary-tree/)
- [429_N叉树的层序遍历](https://leetcode.cn/problems/n-ary-tree-level-order-traversal/)
- [515_在每个树行中找最大值](https://leetcode.cn/problems/find-largest-value-in-each-tree-row/)
- [116_填充每个节点的下一个右侧节点指针](https://leetcode.cn/problems/populating-next-right-pointers-in-each-node/)
- [117_填充每个节点的下一个右侧节点指针II](https://leetcode.cn/problems/populating-next-right-pointers-in-each-node-ii/submissions/)
- [104_二叉树的最大深度](https://leetcode.cn/problems/maximum-depth-of-binary-tree/)
- [111_二叉树的最小深度](https://leetcode.cn/problems/minimum-depth-of-binary-tree/)
***
## 102_二叉树的层序遍历
层序遍历，就是从左到右，一层一层去遍历二叉树，

需要借用一个辅助数据结构队列来实现，**队列先进先出，符合一层一层便利的逻辑**，用栈进行先进后出适合模拟深度优先搜索遍历也就是递归的逻辑

**层序遍历就是图论中的广度优先遍历**

### 层序遍历
```cpp
class Solution{
public:
    vector<vector<int>> levelOrder(TreeNode* root) {
        queue<TreeNode*> que;
        if(root != NULL) que.push(root);
        vector<vector<int>> res;
        while(!que.empty()) {
            int size = que.size();
            vector<int> vec;
            for (int i = 0; i < size; i++) {
                TreeNode* node = que.front();
                que.pop();
                vec.push_back(node->val);
                if (node->left) que.push(node->left);
                if (node->right) que.push(node->right);
            }
            res.push_back(vec);
        }
        return res;
    }
}
```
### 递归法
```cpp
class Solution {
public:
    void order(TreeNode* cur, vector<vector<int>>& res,int depth) {
        if (cur == nullptr) return;
        if (res.size() == depth) res.push_back(vector<int>());
        res[depth].push_back(cur->val);
        order(cur->left, res, depth + 1);
        order(cur->right, res, depth + 1);
    }
    vector<vector<int>> levelOrder(TreeNode* root) {
        vector<vector<int>> res;
        int depth = 0;
        order(root, res, depth);
        return res;
    }
};
```

## 107_二叉树的层次遍历II
```cpp
class Solution {
public:
    vector<vector<int>> levelOrderBottom(TreeNode* root) {
        queue<TreeNode*> que;
        if (root != NULL) que.push(root);
        vector<vector<int>> res;
        while(!que.empty()) {
            int size = que.size();
            vector<int> vec;
            for(int i = 0; i < size; i++) { 
                TreeNode* node = que.front();
                que.pop();
                vec.push_back(node->val);
                if (node->left) que.push(node->left);
                if (node->right) que.push(node->right);
            }
            res.push_back(vec); 
        }
        reverse(res.begin(),res.end());
        return res;
    }
};
```
与上一题相同，最后`reverse(res)`
## 二叉树的右视图
```cpp
class Solution {
public:
    vector<int> rightSideView(TreeNode* root) {
        queue<TreeNode*> que;
        vector<int> res;
        if (root != NULL) que.push(root);
        while (!que.empty()) {
            int size = que.size();
            for (int i = 0; i < size; i++) {
                TreeNode* node = que.front();
                que.pop();
                if (i == size - 1) res.push_back(node->val);
                if (node->left) que.push(node->left);
                if (node->right) que.push(node->right);
            }       
        }
        return res;
    }
};
```

## 二叉树的层平均值
```cpp
class Solution {
public:
    vector<double> averageOfLevels(TreeNode* root) {
        queue<TreeNode*> que;
        vector<double> res;
        if(root != NULL) que.push(root);
        while(!que.empty()) {
            int size = que.size();
            double sum = 0;
            for(int i = 0; i < size; i++) {
                TreeNode* node = que.front();
                que.pop();
                sum = sum + node->val;
                if(node->left) que.push(node->left);
                if(node->right) que.push(node->right);
            }
            res.push_back(sum/size);
        }
        return res;
    }
};
```
## 429_N叉树的层序遍历
```cpp
class Node{
public:
    int val;
    vector<Node*> children;
    Node() {}
    Node(int _val) {
        val = _val;
    }
    Node(int _val, vector<Node*> _children) {
        val = _val;
        children = _children;
    }
};
class Solution {
public:
    vector<vector<int>> levelOrder(Node* root) {
        queue<Node*> que;
        if (root != NULL) que.push(root);
        vector<vector<int>> res;
        while(!que.empty()) {
            int size = que.size();
            vector<int> vec;
            for(int i = 0; i <size; i++) {
                Node* node = que.front();
                que.pop();
                vec.push_back(node->val);
                for (int i = 0; i < node->children.size(); i++) {
                    if(node->children[i]) que.push(node->children[i]);
                }
            }
            res.push_back(vec);
        }
        return res;
    }
};
```
## 515_在每个树行中找最大值
```cpp
class Solution {
public:
    vector<int> largestValues(TreeNode* root) {
        queue<TreeNode*> que;
        if(root != NULL) que.push(root);
        vector<int> res;
        while (!que.empty()) {
            int size = que.size();
            int maxvalue = INT_MIN;
            for(int i = 0; i < size; i++) {
                TreeNode* node = que.front();
                que.pop();
                maxvalue = maxvalue < node->val ? node->val : maxvalue;
                if(node->left) que.push(node->left);
                if(node->right) que.push(node->right);
            }
            res.push_back(maxvalue);
        }
        return res;
    }
};
```

## 116_填充每个节点的下一个右侧节点指针
```cpp
class Node {
public:
    int val;
    Node* left;
    Node* right;
    Node* next;

    Node() : val(0), left(NULL), right(NULL), next(NULL) {}

    Node(int _val) : val(_val), left(NULL), right(NULL), next(NULL) {}

    Node(int _val, Node* _left, Node* _right, Node* _next)
        : val(_val), left(_left), right(_right), next(_next) {}
};

class Solution {
public:
    Node* connect(Node* root) {
        queue<Node*> que;
        if(root != NULL) que.push(root);
        while (!que.empty()) {
            int size = que.size();
            Node* nodePre;
            Node* node;
            for (int i = 0; i < size; i++) {
                if (i == 0) {
                    nodePre = que.front();
                    que.pop();
                    node = nodePre;
                } else {
                    node = que.front();
                    que.pop();
                    nodePre->next = node;
                    nodePre = nodePre->next;
                }
                if (node->left) que.push(node->left);
                if (node->right) que.push(node->right);
            }
            nodePre->next = NULL;
        }
        return root;
    }
};
```
## 104.二叉树的最大深度
### 迭代法
```cpp
class Solution {
public:
    int maxDepth(TreeNode* root) {
        if (root==NULL) return 0;
        int depth = 0;
        queue<TreeNode*> que;
        que.push(root);
        while (!que.empty()) {
            int size = que.size();
            depth++;
            for(int i = 0; i<size; i++) {
                TreeNode* node = que.front();
                que.pop();
                if(node->left) que.push(node->left);
                if(node->right) que.push(node->right);
            }
        }
        return depth;
    }
};
```
## 111_二叉树的最小深度
```cpp
class Solution {
public:
    int minDepth(TreeNode* root) {
        queue<TreeNode*> que;
        if (root == NULL) return 0;
        que.push(root);
        int mindepth = 0;
        while(!que.empty()) {
            int size = que.size();
            mindepth++;
            for(int i = 0; i < size; i++) {
                TreeNode* node = que.front();
                que.pop();
                if(node->left) que.push(node->left);
                if(node->right) que.push(node->right);
                if(!node->left && !node->right) {
                    return mindepth;
                }
            }
        }
        return mindepth;
    }
};
```

