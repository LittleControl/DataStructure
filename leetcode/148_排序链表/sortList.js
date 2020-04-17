/*
在 O(n log n) 时间复杂度和常数级空间复杂度下，对链表进行排序。
示例 1:
    输入: 4->2->1->3
    输出: 1->2->3->4
示例 2:
    输入: -1->5->3->4->0
    输出: -1->0->3->4->5
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
 * @return {ListNode}
 */

function ListNode(val) {
    this.val = val
    this.next = null
}

var sortList = function (head) {
    let point = head
    let arr = []
    while (point) {
        arr.push(point.val)
        point = point.next
    }
    arr.sort((a, b) => a - b)
    point = head
    for (let i = 0; i < arr.length; i++) {
        point.val = arr[i]
        point = point.next
    }
    return head
};

let list = new ListNode(4)
let point = list
point.next = new ListNode(3)
point = point.next
point.next = new ListNode(2)
point = point.next
point.next = new ListNode(1)
console.log(list)
list = sortList(list)
console.log(list)
