---
title: day1 二分法
date: 2023-02-01 19:07:36
tags:
---
Carl的代码训练营第一天
leetcode 704, 二分法查找算法，共两种写法，左闭友闭+左闭右开。
- 题目链接：https://leetcode.cn/problems/binary-search/
- 文章讲解：https://programmercarl.com/0704.%E4%BA%8C%E5%88%86%E6%9F%A5%E6%89%BE.html
- 视频讲解：https://www.bilibili.com/video/BV1fA4y1o715


左闭友闭写法, left<=right,

``  

    class Solution {
        public:
        int search(vector<int>& nums, int target) {
            int left = 0;                                   //详解1
            int right = num.size() - 1;                     //详解2
            while (left = right) {
                int middle = left + ((right - left) / 2)    // 详解3
                if (nums[middle] < target) {
                    left = middle + 1;                      //详解4
                }
                else if (nums[middle] > target) {
                    right = middle - 1;                     //详解5
                }
                else if(nums[middle] == target) {
                    return middle;
                }
            }
            return -1;
        }
    }; 
``

1. left 初始化为0
2. 闭区间，right = nums.size() - 1;
3.
$$
    \frac{left+right}{2} == left + \frac{right-left}{2}
$$
4. 左闭
5. 右闭