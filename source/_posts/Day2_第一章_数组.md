---
title: 数组II
author: Craig
date: 2023-02-02 17:05:40
tags: 
- 数组
- LeetCode
categories:
- 随想录训练营
excerpt: 977_有序数组的平方, 209_长度最小的子数组, 59_螺旋矩阵。
---
代码随想录训练营第一天，二分查找和移除元素

- [977_有序数组的平方](https://leetcode.cn/problems/squares-of-a-sorted-array/)
- [209_长度最小的子数组](https://leetcode.cn/problems/minimum-size-subarray-sum/)
- [59_螺旋矩阵](https://leetcode.cn/problems/spiral-matrix-ii/)
***
## 997_有序数组的平方
[文章讲解](https://programmercarl.com/0977.%E6%9C%89%E5%BA%8F%E6%95%B0%E7%BB%84%E7%9A%84%E5%B9%B3%E6%96%B9.html)
### 暴力解法
```cpp
class solution {
public:
    vector<int> sortedSquares(vector<int>& nums) {
        for (int i = 0; i < nums.size(); i++) {
            nums[i] = nums[i] * nums[i];
        }
        sort(nums.begin(), nums.end());
        return nums;
    }
}
```
每个数平方后排序，时间复杂度O(n+logn)
### 双指针
i指向起始位置,
j指向末尾位置,
从大到小给`ans[len]`赋值

```cpp
class Solution {
public:
    vector<int> sortedSquares(vector<int>& nums) {
        int len = nums.size() - 1;
        vector<int> ans(num.size(), 0)
        for (int i = 0, j = len; i<=j;) {
            if (nums[i]*nums[i] < nums[j]*nums[j]) {
                ans[len] = nums[j]*nums[j];
                len--; 
                j--;
            }
            else {
                ans[len] = nums[i] * nums[i];
                len--;
                i++;
            }
        }
        return ans;
    }
}
```
1. `vector<int> ans(num.size(),0)`;
2. `nums[i] < nums[j]`, 较大的值`nums[j]`去队尾`nums[len]`;后`len--`, `j--`;
3. `nums[i] > nums[j]`, 较大的值`nums[i]`去队尾`nums[len]`后, `len--`, `i++`;

## 209_长度最小的子数组
[文章讲解](https://programmercarl.com/0209.%E9%95%BF%E5%BA%A6%E6%9C%80%E5%B0%8F%E7%9A%84%E5%AD%90%E6%95%B0%E7%BB%84.html)

暴力解法不能通过leetcode的测试
滑动窗口:
```cpp
class Solution {
public:
    int minSubArrayLen(int target, vector<int>& nums) {
        int sum = 0;
        int ans = INT_MAX;
        int sublen=0;
        for (int left = 0, right = 0;right < nums.size(); right++) {
            sum = sum + nums[right];
            while (sum >= target) {
                sublen = right - left + 1;
                ans = ans < sublen ? ans : sublen;
                sum = sum - nums[left];
                left = left + 1;
            }
        }
        return ans == INT_MAX ? 0 : ans;
    }
};
```
1. `sum`的初始化要在`for`循环之外
2. 判断结束后`left++`, 窗口左移一位
3. 最后要判断所有的值相加是否依然小于`target`

## 59_螺旋矩阵
[文章讲解](https://programmercarl.com/0059.%E8%9E%BA%E6%97%8B%E7%9F%A9%E9%98%B5II.html)
始终是左闭右开区间；
```cpp
class Solution {
public:
    vector<vector<int>> generateMatrix(int n) {
        vector<vector<int>> ans[n, vector<int>(n)];
        int start_x=0, start_y=0;
        int i=0, int j = 0;
        int loop = n / 2;
        int offset = 1;
        int count = 1;
        while (loop) {
            for (j = start_y; j < len - offset -1; j++) {
                ans[start_x][j] = count;
                count = count + 1;
            }
            for (i = start_x; i < len - offset - 1; i++) {
                ans[i][j] = count;
                count = count + 1;
            }
            for (; j > start_x; j--) {
                ans[i]ans[j] = count;
                count = count + 1;
            }
            for (; i > start_y; i--) {
                ans[i][j] = count;
                count = count + 1;
            }
            start_x = start_x + 1;
            start_y = start_y + 1;
            offset = offset + 1;
            loop = loop -1;
        }
        if(n % 2 == 1) {
            ans[n / 2][n / 2] = n * n;
        }
        return ans;
    }
};
```
1. `/`, 除法向下取整。