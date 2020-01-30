/* 
    给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。
    如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
    您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

    示例
        输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
        输出：7 -> 0 -> 8
        原因：342 + 465 = 807
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

let l1 = new ListNode(8)
let c2 = new ListNode(9)
let c3 = new ListNode(9)
let l2 = new ListNode(2)

l1.next = c2
c2.next = c3

let addTwoNumbers = function (l1, l2) {
    let single = l1.val + l2.val
    let carry = 0
    if (single >= 10) {
        single = single % 10
        carry = 1
    }
    let res = new ListNode(single)
    let p = res
    l1 = l1.next
    l2 = l2.next
    function Loop(link) {
        let tem = link.val + carry
        carry = 0
        if (tem >= 10) {
            tem = tem % 10
            carry = 1
        }
        p.next = new ListNode(tem)
        p = p.next
    }
    while (l1 || l2) {
        if (l1 == null) {
            Loop(l2)
            l2 = l2.next
        } else if (l2 == null) {
            Loop(l1)
            l1 = l1.next
        } else {
            let tem = l1.val + l2.val + carry
            carry = 0
            if (tem >= 10) {
                tem = tem % 10
                carry = 1
            }
            l1 = l1.next
            l2 = l2.next
            p.next = new ListNode(tem)
            p = p.next
        }
    }
    if (carry == 1) {
        p.next = new ListNode(carry)
    }
    return res
};

let l3 = addTwoNumbers(l1, l2)
console.log(l3)
