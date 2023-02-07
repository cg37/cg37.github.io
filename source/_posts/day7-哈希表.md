---
title: day7_哈希表
date: 2023-02-07 15:49:10
tags:
---
# 哈希表
代码训练营day6，有以下题目
[454_四数相加](https://leetcode.cn/problems/4sum-ii/submissions/)
[383_赎金信](https://leetcode.cn/problems/ransom-note/)
[15_三数之和](https://leetcode.cn/problems/3sum/)
[]()
# 454四数相加II
[文章详解](https://programmercarl.com/0454.%E5%9B%9B%E6%95%B0%E7%9B%B8%E5%8A%A0II.html#%E5%85%B6%E4%BB%96%E8%AF%AD%E8%A8%80%E7%89%88%E6%9C%AC)

先写下来，再试着理解代码
```cpp
class Solution {
public:
    int fourSumCount(vector<int>& nums1, vector<int>& nums2, vector<int>& nums3, vector<int>& nums4) {
        unordered_map <int, int> map_ab;
        for(int a: nums1) {
            for(int b: nums2)
                map_ab[a+b]++;
        }
        int ans = 0;
        for(int c:nums3){
            for(int d:nums4){
                int tmp = 0-(c+d);
                if(map_ab.find(tmp) != map_ab.end()) {
                    ans = ans + map_ab[tmp];
                }
            }
        }
        return ans;
    }
};
```
- map[key]value;
- a+b为key，value为key出现过的次数

# 383_赎金信
```cpp
class Solution {
public:
    bool canConstruct(string ransomNote, string magazine) {
        if(ransomNote.size()>magazine.size()) {
            return false;
        }
        vector<int> record(26,0);
        for (auto i:magazine) {
            record[i-'a']++;
        }
        for (auto i:ransomNote) {
            record[i-'a']--;
            if (record[i - 'a'] < 0) {
                return false;
            }
        }
        return true;
    }
};
```
写起来还是比较轻松的
- `s.size() == s.length();`
- `if (record[i - 'a'] < 0)`

## 暴力解法
```cpp
class Solution {
public:
    bool canConstruct(string ransomNote, string magazine) {
        if (ransomNote.size() > magazine.size()) {
            return false;
        }
        vector<int>  record(26,0);
        for(int i = 0; i < magazine.size(); i++) {
            record[magazine[i]-'a']++;
        }
        for(int i = 0; i < ransomNote.size(); i++) {
            record[ransomNote[i]-'a']--;
            if(record[ransomNote[i] - 'a'] < 0) {
                return false;
            }
        }
        return true;
    }
};
```
这种解法有问题，不可取，但是我懒得改了
# 15 三数之和
这题很有意思，双指针解法
```cpp
class Solution {
public:
    vector<vector<int>> threeSum(vector<int>& nums) {
        vector<vector<int>> ans;
        sort(nums.begin(), nums.end());
        int left = 0, right = 0;
        for(int i=0; i < nums.size(); i++) {
            if(nums[i] > 0) {
                return ans;
            }
            if (i > 0 && nums[i] == nums[i-1]) {
                continue;
            }
            left = left + 1;
            right = nums.size() - 1;
            while(left < right) {
                if (nums[i] + nums[left] + nums[right] > 0) {
                    right = right - 1;
                } 
                else if (nums[i] + nums[left] + nums[right] < 0) {
                    left = left + 1;
                }
                else {
                    ans.push_back(vector<int>{nums[i],nums[left],nums[right]});
                    while(left < right && nums[left] == nums[left +1]) {
                        left = left + 1;
                    }
                    while(left < right && nums[right] == nums[right - 1]) {
                        right = right - 1;
                    }
                    left = left + 1;
                    right = right - 1;
                }
            }
        }
        return ans;
    }
};
```
- 注意循环初始时要对left 和right赋值;
- 查重在返回一个ans后再进行，因为0 + 0 + 0 = 0；

# 四数之和
迄今为止遇到的最复杂的一道题，挑战一下

```cpp
class Solution {
public:
    vector<vector<int>> fourSum(vector<int>& nums, int target) {
        vector<vector<int>> ans;
        sort(nums.begin(), nums.end());
        for(int k = 0; k < nums.size(); k++) {
            if (nums[k] >= 0 && nums[k] > target) {
                break;
            }
            if (k > 0 && nums[k] == nums[k - 1]) {
                continue;
            }

            for(int i = k + 1; i<nums.size(); i++) {
                
                if (nums[i] + nums[k]>= 0 && nums[i] + nums[k] > target) { 
                    break;
                }
                if(i > k + 1 && nums[i] == nums[i-1]) {
                    continue;
                }
                int left = i + 1;
                int right = nums.size() - 1;
                while(left < right) {
                    if ((long)nums[k] + nums[i] + nums[left] + nums[right] < target) {
                        left++;
                    }
                    else if ((long)nums[k] + nums[i] + nums[left] + nums[right] > target) {
                        right--;
                    }
                    else {
                        ans.push_back(vector<int>{nums[k],nums[i],nums[left],nums[right]});
                        while(left < right && nums[right] == nums[right-1]) {
                            right--;
                        }
                        while(left < right && nums[left] == nums[left+1]) {
                            left++;
                        }
                        left++;
                        right--;
                    }        
                }
            }
        }
        return ans;
    }
};
```
很复杂，多看几遍吧，满满的细节