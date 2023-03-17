---
title: cpp 进制转换
author: Craig
date: 2023-03-13 18:55:48
tags:
excerpt:
---
# `Bitset`
[原文链接](https://cplusplus.com/reference/bitset/bitset/?kw=bitset)
bitset存储二进制数, 

该类模拟一个布尔元素数组, 但对空间分配进行了优化, 每个元素只占一个比特(bit),只有`char`(1 byte)的八分之一.

每一位都可以被单独访问, 例如, 给定一个名为`foo`的`bitset`, 如同常规的访问数组元素一样, `foo[3]`访问它的第四位, 但是在C++中, 没有元素的大小是一个`bit`(最小的`char`为`1 byte ` == `8 bit`);
所以单个元素被作为特殊的引用类型来访问(见[`bitset::reference`](https://cplusplus.com/reference/bitset/bitset/reference/))

`bitset`有个特性是可以由整数值和二进制字符串构建并转换; 他也可以直接从二进制格式的流中插入和提取;

`bitset`的大小在编译时就要确定(由其模板参数决定), 如果需要优化空间并且允许动态调整大小的, 参见`vector<bool>`

```cpp
    std::bitset<10> bitNum; //一个十位的, 名为 bitNum 的 bitset
    bitNum = 10;
    std::cout<<bitNum<<std::endl; //打印结果为 '0000001010'
```

## do while
```cpp
    class Solution{
    public:
        int decToBin(int decNum) {
            int i = 0;
            std::vector<int> binArr;
            do {
                binArr.push_back(decNum % 2);
                decNum = decNum / 2;
                i++;
            }while(decNum > 0)
        }
    }
```