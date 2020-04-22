/*
给你两个 非空 链表来代表两个非负整数。数字最高位位于链表开始位置。它们的每个节点只存储一位数字。将这两数相加会返回一个新的链表。
你可以假设除了数字 0 之外，这两个数字都不会以零开头。
进阶：
如果输入链表不能修改该如何处理？换句话说，你不能对列表中的节点进行翻转。

示例：
输入：(7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4)
输出：7 -> 8 -> 0 -> 7
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
var addTwoNumbers = function (l1, l2) {
    if (l1 == null || l2 == null) {
        return null
    }
    let arr1 = []
    let arr2 = []
    while (l1) {
        arr1.push(l1.val)
        l1 = l1.next
    }
    while (l2) {
        arr2.push(l2.val)
        l2 = l2.next
    }
    let carrier = 0
    let res_arr = []
    for (let i = arr1.length - 1, j = arr2.length - 1; i >= 0 || j >= 0; i--, j--) {
        if (i >= 0 && j >= 0) {
            res_arr.push((arr1[i] + arr2[j] + carrier) % 10)
            if (arr1[i] + arr2[j] + carrier >= 10) {
                carrier = 1
            } else {
                carrier = 0
            }
        } else if (i >= 0) {
            res_arr.push((arr1[i] + carrier) % 10)
            if (arr1[i] + carrier >= 10) {
                carrier = 1
            } else {
                carrier = 0
            }
        } else {
            res_arr.push((arr2[j] + carrier) % 10)
            if (arr2[j] + carrier >= 10) {
                carrier = 1
            } else {
                carrier = 0
            }
        }
    }
    if (carrier == 1) {
        res_arr.push(1)
    }
    let res = new ListNode(res_arr[res_arr.length - 1])
    for (let i = 0; i < res_arr.length - 1; i++) {
        let temp = new ListNode(res_arr[i])
        temp.next = res.next
        res.next = temp
    }
    return res
};

let l1 = new ListNode(6)
l1.next = new ListNode(4)
let l2 = new ListNode(3)
l2.next = new ListNode(8)
let l3 = addTwoNumbers(l1, l2)
console.log(l3)


