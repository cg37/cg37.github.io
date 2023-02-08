---
title: day8_反转字符串
date: 2023-02-08 15:37:57
tags:
---
# day8_字符串
- [344_反转字符串](https://leetcode.cn/problems/reverse-string/submissions/)
- [541_反转字符串II](https://leetcode.cn/problems/reverse-string-ii/)
- [Offer05_替换空格](https://leetcode.cn/problems/ti-huan-kong-ge-lcof/)
- [151_反转字符串里的单词](https://leetcode.cn/problems/reverse-words-in-a-string/)
- [Offer58II_左旋转字符串](https://leetcode.cn/problems/zuo-xuan-zhuan-zi-fu-chuan-lcof/)
# 344_反转字符串
[文章讲解](https://programmercarl.com/0344.%E5%8F%8D%E8%BD%AC%E5%AD%97%E7%AC%A6%E4%B8%B2.html)
```cpp
class Solution {
public:
    void reverseString(vector<char>& s) {
        int len = s.size();
        for(int i = 0, j = len-1; i<len/2; i++, j--) {
            swap(s[i],s[j]);
        }
    }
};
```
这道题比较easy
# 541_反转字符串II
```cpp
class Solution {
public:
    string reverseStr(string s, int k) {
        for(int i = 0; i<s.size(); i = i+ 2*k) {
            if(i + k <= s.size()) {
                reverse(s.begin()+i, s.begin()+i+k);
            } else {
                reverse(s.begin()+i, s.end());
            }
        }
        return s;
    }
};
```
##不使用库函数，自己编写reverse函数
```cpp
class Solution {
public:
    void reverse(string&s, int start, int end) { //左闭友闭区间
        for(int i = start, j = end; i < j; i++, j--) {
            swap(s[i], s[j]);
        }
    }
    string reverseStr(string s, int k) {
        for(int i = 0; i<s.size(); i = i + 2 * k) {
            if (i + k <=s.size()) {
                reverse(s,i,i+k-1);
                continue;
            } else {
                reverse(s, i, s.size()-1);
            }
        }
        return s;
    }
};
```
# 剑指Offer05_替换空格
[文章详解](https://programmercarl.com/%E5%89%91%E6%8C%87Offer05.%E6%9B%BF%E6%8D%A2%E7%A9%BA%E6%A0%BC.html)
双指针法，从队尾开始移动，
```cpp
class Solution {
public:
    string replaceSpace(string s) {
        int origin_len = s.size();
        int space_num = 0;
        for(int i=0; i < origin_len; i++) {
            if(s[i] == ' ')
                space_num++;
        }
        s.resize(s.size()+space_num);
        int extern_len = s.size()*;
        for (int i = extern_len - 1, j = origin_len - 1; j<i; j--, i--) {
            if(s[j] != ' ') {
                s[i] = s[j];
            } else {
                s[i] = '0';
                s[i-1] = '2';
                s[i-2] = '%';
                i = i - 2;
            }
        }
        return s;
    }
};
```
- extern_len = s.size() +space_num*2
- 要*2是因为 ' ' 转换为'20%'需要多2个位置
- i从加上空格转换位置之后的末尾开始-1
- j从原来的长度开始-1

# 反转字符串里的单词
[文章讲解](https://programmercarl.com/0151.%E7%BF%BB%E8%BD%AC%E5%AD%97%E7%AC%A6%E4%B8%B2%E9%87%8C%E7%9A%84%E5%8D%95%E8%AF%8D.html#%E5%85%B6%E4%BB%96%E8%AF%AD%E8%A8%80%E7%89%88%E6%9C%AC)

```cpp
class Solution {
public:
    
        void reverse(string &s, int start, int end){
            for(int i = start, j = end; i < j; i++, j--) {
                swap(s[i], s[j]);
            }
        }
        void removeExtraSpaces(string &s) {
            int slow = 0;
            for(int fast = 0; fast<s.size(); fast++) { //
                if(s[fast] != ' ') {
                    if(slow != 0) {
                        s[slow] = ' ';
                        slow = slow + 1;
                    }
                    while(s[fast] != ' ' && fast < s.size()) {
                        s[slow] = s[fast];
                        slow++;
                        fast++;
                    }  
                }
            }
            s.resize(slow);
        }
        string reverseWords(string s) {
            removeExtraSpaces(s);
            reverse(s, 0, s.size()-1);
            int start = 0;
            for(int i = 0; i <= s.size(); i++) {
                if(i == s.size() || s[i]==' ') {
                    reverse(s, start, i-1);
                    start = i + 1;
                }
            }
            return s;
        }
};
```

# Offer58II_左旋转字符串
[文章讲解](https://programmercarl.com/%E5%89%91%E6%8C%87Offer58-II.%E5%B7%A6%E6%97%8B%E8%BD%AC%E5%AD%97%E7%AC%A6%E4%B8%B2.html#%E5%85%B6%E4%BB%96%E8%AF%AD%E8%A8%80%E7%89%88%E6%9C%AC)
```cpp
#include "head.h"
class Solution {
public:
    string reverseLeftWords(string s, int n) {
        reverse(s.begin(), s.begin()+n);
        reverse(s.begin()+n, s.end());
        reverse(s.begin(), s.end());
        return s;
    }   
};
```
被这道题的解题思路惊艳到了