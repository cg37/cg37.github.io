---
title: 栈与队列II
date: 2023-02-11 2:07:36
tags:
---
# day11_第五章_栈与队列
[20_有效的括号](https://leetcode.cn/problems/valid-parentheses/)

# 20_有效的括号
[文章详解](https://programmercarl.com/0020.%E6%9C%89%E6%95%88%E7%9A%84%E6%8B%AC%E5%8F%B7.html#%E9%A2%98%E5%A4%96%E8%AF%9D)
[1027_删除字符串中多有相邻的重复项](https://leetcode.cn/problems/remove-all-adjacent-duplicates-in-string/)
[150_逆波兰表达式求值](https://leetcode.cn/problems/evaluate-reverse-polish-notation/)

括号匹配是用栈解决的经典问题
```cpp
class Solution {
public:
    bool isValid(string s) {
        stack<int> st;
        for(int i = 0; i < s.size(); i++) {
            if(s[i] == '(') st.push(')');
            else if(s[i] == '{') st.push('}');
            else if(s[i] == '[') st.push(']');
            else if(st.empty() || s[i] != st.top()) return false;
            else st.pop();
        }
        return st.empty();
    }
};
```

我觉得这种题真的应该背下来

# 1027_删除字符串中多有相邻的重复项
[文章详解](https://programmercarl.com/1047.%E5%88%A0%E9%99%A4%E5%AD%97%E7%AC%A6%E4%B8%B2%E4%B8%AD%E7%9A%84%E6%89%80%E6%9C%89%E7%9B%B8%E9%82%BB%E9%87%8D%E5%A4%8D%E9%A1%B9.html)

用栈存放遍历过的元素, 遍历当前元素的时候，去栈里看一下我们是不是遍历过相同数值的相邻元素。

## 栈解法
```cpp
class Solution() {
    string removeDuplicates(string s) {
        stack<char> st;
        for(char &chr:s) {
            if(st.empty() || chr!=st.top()) {
                 st.push(chr); 
            }
            else {
                st.pop();
            }
        }
        string ans = "";
        while (!st.empty()) {
            ans = ans + st.top();
            st.pop();
        }
        reverse(ans.begin(),ans.end());
        return ans;
    }
}
```
## 以数组为栈的解法
```cpp
class Solution {
public:
    string removeDuplicates(string s) {
        string ans;
        for(char &chr : s) {
            if (ans.empty() || chr != ans.back()) {
                ans.push_back(chr);
            }
            else {
                ans.pop_back();
            }
        }
        return ans;
    }
};
```
# 150_逆波兰表达式求值
[文章详解](https://programmercarl.com/0150.%E9%80%86%E6%B3%A2%E5%85%B0%E8%A1%A8%E8%BE%BE%E5%BC%8F%E6%B1%82%E5%80%BC.html)

```cpp
class Solution {
public:
    int evalRPN(vector<string>& tokens) {
        stack<long long> st;
        for(int i = 0; i< tokens.size(); i++) {
            if(tokens[i]=="+"||tokens[i]=="-"||tokens[i]=="*"||tokens[i]=="/") {
                long long num1 = st.top();
                st.pop();
                long long num2 = st.top();
                st.pop();
                if(tokens[i]=="+") st.push(num2+num1);   //***
                if(tokens[i]=="-") st.push(num2-num1);
                if(tokens[i]=="*") st.push(num2*num1);
                if(tokens[i]=="/") st.push(num2/num1); 
            }
            else {
                st.push(stoll(tokens[i]));
            }
        }
        long long ans;
        ans = st.top();
        st.pop();
        return ans;
    }
};
```

重点对这句解析一下

    ```if(tokens[i]=="/") st.push(num2/num1);```

入栈队列为`82/`,则表达式为`8/2`, 出栈时`num2 = 8`, `num1 = 2`;
所以`st.push(num2/num1)`
