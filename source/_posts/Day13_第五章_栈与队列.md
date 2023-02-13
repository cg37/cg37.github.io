---
title: 栈与队列III
date: 2023-02-13 22:57:49
tags:
- 栈
- 队列
categories:
- 随想录训练营
excerpt: 随想录训练营第13天
---
# Day13_第五章_栈与队列
[230_滑动窗口最大值](https://leetcode.cn/problems/sliding-window-maximum/)
[347_前K个高频元素](https://leetcode.cn/problems/top-k-frequent-elements/)
有点抽象，再多看看吧

# 239_滑动窗口最大值
[文章解析](https://programmercarl.com/0239.%E6%BB%91%E5%8A%A8%E7%AA%97%E5%8F%A3%E6%9C%80%E5%A4%A7%E5%80%BC.html)
```cpp
class Solution {
public:
    class MyQueue{
    public:
        deque<int> que;
        void pop(int value) {
            if (!que.empty() && value == que.front()) {
                que.pop_front();
            }
        }
        void push(int value) {
            while(!que.empty() && value > que.back()) {
                que.pop_back();
            } 
            que.push_back(value);
        }
        int front (){
            return que.front();
        }
    };
    vector<int> maxSlidingWindow(vector<int>& nums, int k) {
        MyQueue que;
        vector<int> ans;
        for (int i= 0; i < k; i++) {
            que.push_back(nums[i]);
        }
        ans.push(que.front());
        for(int i = k; i < nums.size(); i++) {
            que.pop(nums[i-k]);
            que.push(nums[i]);
            ans.push_back(que.front());
        }
        return ans;
    }
};
```
# 247_前K个高频元素
[文章详解](https://programmercarl.com/0347.%E5%89%8DK%E4%B8%AA%E9%AB%98%E9%A2%91%E5%85%83%E7%B4%A0.html)
```cpp
class Solution {
public:
    class mycomparison {
        public:
            bool operator()(const pair<int, int>& lhs, const pair<int, int>& rhs) {
                return lhs.second > rhs.second;
            }
    };
    vector<int> topKFrequent(vector<int>& nums, int k) {
        unordered_map<int, int> map;
        for(int i = 0; i < nums.size(); i++) {
            map[nums[i]]++;
        }
        priority_queue<pair<int, int>,vector<pair<int,int>>,mycomparison> pri_que;
        for(unordered_map<int,int>::iterator it = map.begin(); it!=map.end(); it++){
            pri_que.push(*it);
            if(pri_que.size() > k){
                pri_que.pop();
            }
        }
        vector<int> ans(k);
        for (int i = k-1; i >= 0; i--) {
            ans[i] = pri_que.top().first;
            pri_que.pop();
        }
        return ans;
    }
};
```