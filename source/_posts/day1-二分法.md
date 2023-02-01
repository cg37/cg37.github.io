---
title: day1 数组(二分查找 & 移除元素)
date: 2023-02-01 19:07:36
tags:
---
Carl的代码训练营第一天，704二分查找; 27移除元素

leetcode 704, 二分法查找算法，共两种写法，左闭友闭+左闭右开。
- 题目链接：https://leetcode.cn/problems/binary-search/
- 文章讲解：https://programmercarl.com/0704.%E4%BA%8C%E5%88%86%E6%9F%A5%E6%89%BE.html
- 视频讲解：https://www.bilibili.com/video/BV1fA4y1o715

## Leetcode704 二分法查找算法

### 写法一，左闭友闭
左闭友闭写法, left<=right,

 

    class Solution {
        public:
        int search(vector<int>& nums, int target) {
            int left = 0;                                   //1
            int right = num.size() - 1;                     //2
            while (left = right) {
                int middle = left + ((right - left) / 2)    // 3
                if (nums[middle] < target) {
                    left = middle + 1;                      //4
                }
                else if (nums[middle] > target) {
                    right = middle - 1;                     //5
                }
                else if(nums[middle] == target) {
                    return middle;
                }
            }
            return -1;
        }
    }; 


***
1. left 初始化为0
2. 闭区间，right = nums.size() - 1;
3.
$$
    \frac{left+right}{2} == left + \frac{right-left}{2}
$$
4. 左闭 left = middle + 1
5. 右闭 right = right - 1
   
## 写法二，左闭右开

左闭右开，left<right
```
class Solution {
public:
    int search(vector<int>& nums, int target) {
        int left = 0;
        int right = nums.right                      //1
        while (left < right) {
            int middle = left + (right - left) / 2;
            if (nums[middle]>target) {
                right = middle;                     //2
            }
            else if(nums[middle] < target) {
                left = middle +1;
            }
            else {
                return middle;
            }
        }
        return -1;
    }
};
```
1. 开区间，[a,b), right = nums.size();
2. 开区间，right = middle;

## LeetCode27 移除元素
### 暴力实现
```

class Solution {
public:
    int removeElement(vector<int>& nums, int val) {
        int len = nums.size();
        for(int i = 0; i < len; i++) {
            if (nums[i] == val) {
                for(int j=i+1; j<len; j++) {
                    nums[i] = nums[j];
                }
                len--;
                i--;
            }
        }
        return len;
    }
};
```
没什么好说的，记住就行
***
### 双指针法
```
class Solution {
public:
    int removeElement(vector<int>& nums, int val) {
        int len = nums.size();
        int slow = 0;
        for(int fast = 0; fast < len; fast++) {
            if(nums[fast] != val) {
                nums[slow] = nums[fast];
                slow++;
            }
        }
        return slow;
    }
};
```
一定记得要初始化slow和fast！！！