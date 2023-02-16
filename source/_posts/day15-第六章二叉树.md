---
title: day15_第六章二叉树
date: 2023-02-16 23:20:22
tags:
excerpt:
author:
---
- [102_二叉树的层序遍历](https://leetcode.cn/problems/binary-tree-level-order-traversal/)
- [107_二叉树的层次遍历II]()
- [199_二叉树的右视图]()
- [637_二叉树的层平均值]()
- [429_N叉树的层序遍历]()
- [515_在每个树行中找最大值]()
- [116_填充每个节点的下一个右侧节点指针]()
- [117_填充每个节点的下一个右侧节点指针II]()
- [104_二叉树的最大深度]()
- [111_二叉树的最小深度]()
***
## 102_二叉树的层序遍历
层序遍历，就是从左到右，一层一层去遍历二叉树，

需要借用一个辅助数据结构队列来实现，**队列先进先出，符合一层一层便利的逻辑**，用栈进行先进后出适合模拟深度优先搜索遍历也就是递归的逻辑

**层序遍历就是图论中的广度优先遍历**

层序遍历的模板:
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