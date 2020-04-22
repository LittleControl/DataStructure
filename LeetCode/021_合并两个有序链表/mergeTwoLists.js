/*
将两个升序链表合并为一个新的升序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
示例：
    输入：1->2->4, 1->3->4
    输出：1->1->2->3->4->4
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val) {
    this.val = val
    this.next = null
}

var mergeTwoLists = function (l1, l2) {
    let arr = []
    while (l1) {
        arr.push(l1.val)
        l1 = l1.next
    }
    while (l2) {
        arr.push(l2.val)
        l2 = l2.next
    }
    let len = arr.length
    if (len == 0) return null
    arr.sort((a, b) => a - b)
    let res = new ListNode(arr[0])
    for (let i = len - 1; i > 0; i--) {
        let temp = new ListNode(arr[i])
        temp.next = res.next
        res.next = temp
    }
    return res
}

//递归
let solution = function (l1, l2) {
    if (l1 == null) return l2
    if (l2 == null) return l1
    if (l1.val < l2.val) {
        l1.next = solution(l1.next, l2)
        return l1
    } else {
        l2.next = solution(l1, l2.next)
        return l2
    }
}

let l1 = new ListNode(1)
let l2 = null
console.log(mergeTwoLists(l1, l2))
