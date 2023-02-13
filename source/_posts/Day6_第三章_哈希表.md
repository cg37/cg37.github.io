---
title: 哈希表II
author: Craig
date: 2023-02-06 15:08:49
tags: 
- Hash
categories:
- 随想录训练营
---

# 哈希表
carl的训练营第六天，哈希表，包括题目
- [242_有效的字母异位词](https://leetcode.cn/problems/valid-anagram/submissions/)
- [349_两个数组的交集](https://leetcode.cn/problems/intersection-of-two-arrays/)
- [202快乐数](https://leetcode.cn/problems/happy-number/submissions/)
- [1两数之和](https://leetcode.cn/problems/two-sum/)

哈希表算我接触的最早的算法题了

遇到需要判断一个元素是否出现在集合里的时候，就考虑用哈希法

[理论基础](https://programmercarl.com/%E5%93%88%E5%B8%8C%E8%A1%A8%E7%90%86%E8%AE%BA%E5%9F%BA%E7%A1%80.html)

# 242_有效的字母异位词
[文章讲解](https://programmercarl.com/0242.%E6%9C%89%E6%95%88%E7%9A%84%E5%AD%97%E6%AF%8D%E5%BC%82%E4%BD%8D%E8%AF%8D.html)

本题算是我为数不多的可以闭着眼睛直接做出来的题目，直接上代码

```cpp
class Solution {
public:
    bool isAnagram(string s, string t) {
        int len_s = s.size();
        int len_t = t.size();
        vector<int> record(26,0);
        if (len_s != len_t) {
            return false;
        }
        for(int i = 0; i < len_s; i++) {
            record[s[i] - 'a']++;
        }
        for(int i = 0; i < len_t; i++) {
            record[t[s] - 'a']--;
        }
        for(int i = 0; i < 26; i++) {
            if (record[i] != 0) {
                return false;
            }
        }
        return true;
    }
};
```
# 349_两个数组的交集
[文章讲解](https://programmercarl.com/0349.%E4%B8%A4%E4%B8%AA%E6%95%B0%E7%BB%84%E7%9A%84%E4%BA%A4%E9%9B%86.html#_349-%E4%B8%A4%E4%B8%AA%E6%95%B0%E7%BB%84%E7%9A%84%E4%BA%A4%E9%9B%86)

## unordered_set 解法
没有限制数值的大小，无法使用数组来做哈希表，使用set

C++提供三种可用的数据结构
```cpp
std::set
std::multiset
std::unoedered_set
```
`std::set` 和`std::multiset` 的底层实现是红黑树，
`std::unordered_set` 底层实现是哈希表，使用`unordered_set` 读写效率最高，并不需要对数据进行排序，
```cpp
class Solution {
public:
    vector<int> intersection(vector<int>& nums1, vector<int>& nums2) {
        unordered_set<int> ans_set;
        unordered_set<int> nums1_set(nums1.begin(),nums.end());
        for(int i = 0; i <nums2.size(), i++) {
            if(nums1_set.find(nums2[i]) != nums1_set.end())
            ans_set.insert(nums2[i]);
        }
        vector<int> ans(ans_set.begin(),ans_set.end())
        return ans ;
    }
};
```
`nums1_set.find(nums2[i]) != nums1_set.end()` 在`nums1_set`中找到了和`nums2[i]`相同的元素且在`nums1_set`中
## 数组解法
```cpp
class Solution {
public:
    vector<int> intersection(vector<int>& nums1, vector<int>& nums2) {
        vector<int> record(1001);
        unordered_set<int> ans;
        for(int i=0; i < nums1.size(); i++) {
            record[nums1[i]] = 1;
        }
        for(int i=0; i < nums2.size(); i++) {
            if(record[nums2[i]]==1) {
                ans.insert(nums2[i]);
            }
        }
        return vector<int>(ans.begin(),ans.end());
    }
};
```
# 202_快乐数
[文章讲解](https://programmercarl.com/0202.%E5%BF%AB%E4%B9%90%E6%95%B0.html)
```cpp
class Solution {
public:
    int getsum(int n){
        int sum = 0;
        while(n) {
            sum = sum + (n % 10)*(n % 10);
            n = n / 10;
        }
        return sum;
    }
    bool isHappy(int n) {
        unordered_set<int> sum_set;
        int sum = 0;
        while(1) {
            sum = getsum(n);
            if(sum == 1) {
                return true;
            } 
            if(sum_set.find(sum) != set_sum.end()) {
                return false;
            } else {
                sumset.insert(sum);
            }
            n = sum;
        }
    }
};
```
如果sum重复出现，就return false;
否则一直找到sum==1为止;
判断sum是否重复出现就用unordered_set;

# 1_两数之和
[文章讲解](https://programmercarl.com/0001.%E4%B8%A4%E6%95%B0%E4%B9%8B%E5%92%8C.html#_1-%E4%B8%A4%E6%95%B0%E4%B9%8B%E5%92%8C)

## 经典的暴力解法
```cpp
class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        vector<int> ans;
        for(int i = 0; i<nums.size()-1;i++) {
            for(int j = i+1; j<nums.size();j++) {
                if (nums[i]+nums[j]==target) {
                    ans.push_back(i);
                    ans.push_back(j);
                }
            }
        }
        return ans;
    }
};
```
那叫写地一个得心应手
## 哈希法
需要存放两个元素，数值和下表，用map；
数值作为key；快速查找key，数值是否出现过，
下标作为value;
C++中有三种map
```cpp
std::map
std::unordered_map
std::multi_map
```
`map`和`multi_map` 底层实现是红黑树; key有序
`unordered_map`底层实现是哈希结构,key无序，直接做映射。

```cpp
class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        unordered_map<int, int> twoSum_map;
        for(int i = 0; i<nums.size(); i++) {
            vector<int> ans;
            int s = target - nums[i];
            auto iter = twoSum_map.find(s);
            if(iter != twoSum_map.end()) {
                ans.push_back(i);
                ans.push_back(iter->second);
                return ans;
            }
            twoSum_map.insert(pair<int,int>(nums[i],i));
        }
        return {};
    }
};
```
1. map->fitst = key;
2. map->second = value;
3. 要将遍历过的key value值放入map中以进行后面的查询；







