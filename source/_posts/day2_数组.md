---
title: day2 数组
date: 2023-02-02 17:05:40
tags: leetcode 
---
977 有序数组的平方
209 长度最小的子数组
59 螺旋矩阵

# 997 有序数组的平方

## 暴力解法
```
class solution {
    public:
    vector<int> sortedSquares(vector<int>& nums) {
        for(int i = 0;i<nums.size(); i++) {
            nums[i] = nums[i] * nums[i];
        }
        sort(nums.begin(),nums.end());
        return nums;
    }
}
```
每个数平方后排序，时间复杂度O(n+logn)
## 双指针
i指向起始位置
j指向末尾位置
从大到小给ans[len]赋值

```
class Solution {
    public:
    vector<int> sortedSquares(vector<int>& nums) {
        int len = nums.size()-1;
        vector<int> ans(num.size(),0)
        for(int i = 0, j = len; i<=j;) {
            if(nums[i]*nums[i] < nums[j]*nums[j]) {
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
### 要点
1. vector<int> ans(num.size(),0);

# 209有序数组的平方

暴力解法不能通过leetcode的测试
滑动窗口:
```
class Solution {
public:
    int minSubArrayLen(int target, vector<int>& nums) {
        int sum = 0;
        int ans = INT_MAX;
        int sublen=0;
        for(int left = 0, right = 0;right < nums.size(); right++) {
            sum = sum + nums[right];
            while (sum >= target) {
                sublen = right - left + 1;
                ans = ans < sublen ? ans : sublen;
                sum = sum - nums[left++];
                //left = left +1;
            }
        }
        return ans == INT_MAX? 0:ans;
    }
};
```
### 要点
1. sum的初始化要在for循环之外
2. 最后要判断所有的值相加是否依然小于target

# 59 螺旋矩阵
始终是左闭右开区间；
```
class Solution {
public:
    vector<vector<int>> generateMatrix(int n) {
        vector<vector<int>> ans[n,vector<int>(n)];
        int start_x=0, start_y=0;
        int i=0, int j=0;
        int loop = n/2;
        int offset = 1;
        int count = 1;
        while(loop) {
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
            ans[n/2][n/2] = n*n;
        }
        return ans;
    }
};
```

累了写不动了