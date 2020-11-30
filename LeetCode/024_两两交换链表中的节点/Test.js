class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

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

function traverseList(list) {
    let res = ''
    while (list) {
        res = res + list.val + '->'
        list = list.next
    }
    return res.slice(0, -2)
}

let list = new Node(1)
list.next = new Node(2)
list.next.next = new Node(3)
list.next.next.next = new Node(4)
list.next.next.next.next = new Node(5)
list.next.next.next.next.next = new Node(6)
console.log(traverseList(list))
list = exchangeVal(list)
console.log(traverseList(list))
