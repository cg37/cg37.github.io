---
title: 链表I
author: Craig
date: 2023-02-03 18:36:51
tags: 
- 链表
categories:
- 随想录训练营
---
第一次接触链表，写的很挣扎
- [203_移除链表元素](https://leetcode.cn/problems/remove-linked-list-elements/)
- [707_设计链表](https://leetcode.cn/problems/design-linked-list/)
- [206_反转链表](https://leetcode.cn/problems/reverse-linked-list/)
## 203_移除链表元素
[文章讲解](https://programmercarl.com/0203.%E7%A7%BB%E9%99%A4%E9%93%BE%E8%A1%A8%E5%85%83%E7%B4%A0.html#%E5%85%B6%E4%BB%96%E8%AF%AD%E8%A8%80%E7%89%88%E6%9C%AC)
这是题目中定义的链表
```cpp
struct ListNode {
    int val;
    ListNode *next;
    ListNode() : val(0), next(nullptr) {}
    ListNode(int x) : val(x), next(nullptr) {}
    ListNode(int x, ListNode *next) : val(x), next(next) {}
};
 ```

### 在原来的链表中删除元素
判断链表第一位是否为target
```cpp
class Solution{
public:
    ListNode* removeElements(ListNode* head, int target) {
        while(head! = NULL && head->val == target) { //删除头节点
            ListNode* tmp = head;
            head = head->next;
            delete tmp;
        }
        //处理后面的节点
        ListNode* cur = head;
        while(cur->next != NULL && cur != NULL) {
            if(cur->next == target) {
                ListNode* tmp = cur->next;
                cur->next = cur->next->next;
                delete tmp;
            } else {
                cur = cur->next;
            }
        }
        return head;
    }
}
```

多写几次，慢慢有手感了
### 设置虚拟头节点
```cpp
class Solution{
public:
    ListNode* removeElement(ListNode* head, int target) {
        ListNode dummyNode = new ListNode(0);
        dummyNode->next = head;
        ListNode* cur = dummyNode;
        while(cur->next != NULL) {
            if(cur->next->val == target) {
                ListNode tmp = cur->next;
                cur->next = cur->next->next;
                delete tmp;
            } else {
                cur = cur ->next;
            }
        }
        head = dummyHead->next;
        delete dummyHead;
        return head;
    }
};
```
多写吧，会好起来的
## 707 设计链表
```cpp
class MyLinkedList {
public:

    struct LinkedNode {
        int val;
        LinkedNode* next;
        LinkedNode(int x):val(x), next(nullptr){}
    };
    MyLinkedList() {
        _dummyNode = new LinkedNode(0);
        _size = 0;
    }
    
    int get(int index) { //获取链表中第 index 个节点的值。如果索引无效，则返回-1。
        if(index > (_size-1) || index < 0) {
            return -1;
        }

        LinkedNode* cur = _dummyNode->next;
        while(index--) {
            cur = cur->next;
        }
        return cur->val;
    }
    /*
        在链表的第一个元素之前添加一个值为 val 的节点。
        插入后，新节点将成为链表的第一个节点。
    */
    void addAtHead(int val) { 
        LinkedNode* newNode = new LinkedNode(val);
        newNode->next = _dummyNode->next;
        _dummyNode->next = newNode;
        _size++;
    }
    //将值为 val 的节点追加到链表的最后一个元素。
    void addAtTail(int val) {  
        LinkedNode* tailNode = new LinkedNode(val);
        LinkedNode* cur = _dummyNode;
        while(cur->next != nullptr) {
            cur = cur->next;
        }
        cur->next = tailNode;
        _size++;
    }

    /*
        在链表中的第 index 个节点之前添加值为 val  的节点。
        如果 index 等于链表的长度，则该节点将附加到链表的末尾。
        如果 index 大于链表长度，则不会插入节点。
        如果index小于0，则在头部插入节点。
    */
    void addAtIndex(int index, int val) { 
    
        if(index>_size) {
            return;
        }
            
        if(index<0) {
            index = 0;
        }
        LinkedNode* indexNode = new LinkedNode(val);
        LinkedNode* cur = _dummyNode;
        while(index) {
            cur=cur->next;
            index--;
        }
        indexNode->next = cur->next;
        cur->next = indexNode;
        _size++;
    }
    /*
        如果索引 index 有效，则删除链表中的第 index 个节点。
    */
    void deleteAtIndex(int index) {
        if(index >= _size|| index <0) {
            return;
        }
        LinkedNode* cur = _dummyNode;
        while(index) {
            cur = cur ->next;
            index--;
        }
        LinkedNode* temp = cur->next;
        cur->next = cur->next->next;
        delete temp;
        _size--;
    }
    void printLinkedList(){
        LinkedNode* cur = _dummyNode;
        while(cur->next != nullptr) {
            cout<< cur->next->val<<" ";
            cur = cur->next;
        } 
        cout<<endl;
    }
private:
    int _size;
    LinkedNode* _dummyNode;
};
```
1. 验证中去极值判断是否合理
2. 一定要使用虚拟头节点

## 206_反转链表
```cpp
class Solution {
public:
    ListNode* reverseList(ListNode* head) {
        ListNode* cur;
        cur = head;
        ListNode* pre
        pre = NULL;
        ListNode* temp
        while (cur) {
            tmep = cur->next;
            cur->next = pre;
            pre = cur;
            cur = temp;
        }
        return pre;
    }
};

```

## 递归解法
```cpp
class Solution {
public:
   ListNode* reverse(ListNode* pre, ListNode* cur) {//专门翻转链表
        if (cur==NULL) {
            return pre;
        }
        ListNode* temp = cur->next;
        cur->next = pre;

        return reverse(cur, temp);
    }
    ListNode* reverseList(ListNode* head) {
        return reverse(NULL,head);
    }
};
```