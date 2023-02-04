---
title: Day 4 链表
date: 2023-02-04 22:26:06
tags:
---
# 24 两两交换链表中的节点

```
class Solution {
public:
    ListNode* swapPairs(ListNode* head) {
        ListNode* dummyHead = new ListNode(0); //虚拟头节点
        dummyHead->next = head;
        ListNode* cur;
        cur = dummyHead;
        ListNode* temp_1;
        ListNode* temp_3;
        while(cur->next != nullptr && cur->next->next != nullptr) {
            temp_1 = cur->next;
            temp_3 = cur->next->next->next;
            cur->next = cur->next->next;  //步骤一
            cur->next->next=temp_1;
            cur->next->next->next = temp_1;
            cur = cur->next->next;
        }
        return dummyHead->next;
    }
};
```
# 删除链表的倒数第N个节点  
[题目链接](https://leetcode.cn/problems/remove-nth-node-from-end-of-list/submissions/)

```

class Solution {
public:
	ListNode* removeNthFromEnd(ListNode* head, int n) {
		ListNode* dummyHead = new ListNode(0);
		dummyHead->next = head;
		ListNode* fast = dummyHead;
		ListNode* slow = dummyHead;
        n=n+1;
		while(n-- && fast != NULL) {
			fast = fast->next;
		}
		//fast = fast->next;
		while(fast!=NULL) {
			fast = fast->next;
			slow = slow->next;
		}
		slow->next = slow->next->next;
        return dummyHead->next;
    }
};
```
1. 快指针移动n+1部
2. 然后快慢指针一起移动
3. 慢指针移动至需要删除的节点的前一个