---
title: day15-第六章二叉树
author: Craig
date: 2023-02-17 17:24:12
tags:
excerpt:
---
- [226_反转二叉树](https://leetcode.cn/problems/invert-binary-tree/)
- [101_对称二叉树](https://leetcode.cn/problems/symmetric-tree/)
  
## 226_反转二叉树
[文章讲解](https://programmercarl.com/0226.%E7%BF%BB%E8%BD%AC%E4%BA%8C%E5%8F%89%E6%A0%91.html#%E9%80%92%E5%BD%92%E6%B3%95)
### 递归法
```cpp
class Solution {
public:
    TreeNode* invertTree(TreeNode* root) {
        if(root == NULL) return root;
        swap(root->left, root->right);
        invertTree(root->left);
        invertTree(root->right);
        return root;
    }
};
```
### 迭代法 前序遍历
```cpp
class Solution {
public:
    TreeNode* invertTree(TreeNode* root) {
        if(root == NULL) return root;
        stack<TreeNode*> st;
        st.push(root);
        while(!st.empty()) {
            TreeNode* node = st.top();
            st.pop();
            swap(node->left, node->right);
            if(node->right) st.push(node->right);
            if(node->left) st.push(node->left);
        }
        return root;
    }
};
```

## 101_对称二叉树
[文章讲解](https://programmercarl.com/0101.%E5%AF%B9%E7%A7%B0%E4%BA%8C%E5%8F%89%E6%A0%91.html#%E9%80%92%E5%BD%92%E6%B3%95)
```cpp
class Solution {
public:
    bool isSymmetric(TreeNode* root) {
        if(root == NULL) return true;
        return compare(root->left, root->right);
    }
private:
    bool compare(TreeNode* left, TreeNode* right) {
        if(left == NULL && right != NULL) return false;
        else if(left !=NULL && right == NULL) return false;
        else if(left == NULL && right == NULL) return true;
        else if(left->val != right->val) return false;

        bool outside = compare(left->left, right->right);
        bool inside = compare(left->right, right->left);
        bool issame = outside && inside;
        return issame;
    }
};
```
