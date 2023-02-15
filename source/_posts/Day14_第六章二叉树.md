---
title: Day14_第六章二叉树
date: 2023-02-15 13:00:06
tags:
excerpt: 
---
# 二叉树
## 二叉树分类
### 满二叉树
### 完全二叉树
子节点连续
### 二叉搜索树
搜索节点复杂组logn，左子树小右子树大
### 平衡二叉搜索树
左右两个子树的高度差绝对值不超过1，且左右两个人子树都是平衡二叉树，

C++中map,set multi_map,multi_set的底层实现都是平衡二叉搜索树，所以map, set增删操作时间复杂度都是logn

## 二叉树存储方式
### 链式存储

### 线式存储
父节点数组下标i，左子节点下标`i * 2 + 1`；右子节点下标`i * 2 + 2`;
## 二叉树遍历
### 深度优先搜索
一般用递归方式
- 前序遍历(递归法，迭代法)
- 中序遍历(递归法，迭代法)
- 后序遍历(递归法，迭代法)
### 广度优先遍历
层序遍历(迭代法)
## 二叉树定义
```cpp
struct TreeNode{
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode(int x):val(x), left(NULL), right(NULL);
};
```
```javascript
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? 0 : left)
    this.right = (right === undefined ? 0 : right)
}
```
# 二叉树的递归遍历
## 前序遍历
1. 确定递归函数的参数和返回值
    ```cpp
    void traversal(TreeNode* cur, vector<int> &vec)
    ```
2. 确定终止条件
   ```cpp
    if (cur==NULL) {
        return;
    }
   ```
3. 确定终止遍历的条件
   ```cpp
    vec.push_back(cur->val);
    traversal(cur->left, vec);
    traversal(cur->right, vec);
   ```
# 二叉树的迭代遍历
## 前序遍历
    


