/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
    function exchangeVal(list, isHead = true) {
        if (isHead) {
            if (list && list.next) {
                let head = list.next
                list.next = head.next
                head.next = list
                list = head
                exchangeVal(list.next, false)
            }
        } else {
            if (list.next && list.next.next) {
                let head = list.next
                list.next = head.next
                head.next = list.next.next
                list.next.next = head
                exchangeVal(head, false)
            }
        }
        return list
    }
    return exchangeVal(head)
}
