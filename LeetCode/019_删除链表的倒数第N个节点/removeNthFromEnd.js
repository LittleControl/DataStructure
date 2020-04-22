/*
给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。
示例：
    给定一个链表: 1->2->3->4->5, 和 n = 2.
    当删除了倒数第二个节点后，链表变为 1->2->3->5.
说明：
    给定的 n 保证是有效的。
进阶：
    你能尝试使用一趟扫描实现吗？
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

function ListNode(val) {
    this.val = val
    this.next = null
}
var removeNthFromEnd = function (head, n) {
    let slow = null
    let fast = head
    let count = 0
    while (fast) {
        count++
        if (count == n + 1) {
            slow = head
            fast = fast.next
        } else if (count < n + 1) {
            fast = fast.next
        } else {
            fast = fast.next
            slow = slow.next
        }
    }
    if (slow != null) {
        slow.next = slow.next.next
        return head
    } else {
        return head.next
    }
}

let head = new ListNode(1)
// head.next = new ListNode(2)
// head.next.next = new ListNode(3)
// head.next.next.next = new ListNode(4)
let res = removeNthFromEnd(head, 1)
console.log(res)
