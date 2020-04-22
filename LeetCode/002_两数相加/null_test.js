class LinkNode {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

let n1 = new LinkNode(1)
let n2 = new LinkNode(2)
n2.next = n1
console.log(n2.next == null)
if (n1.next || n2.next) {
    console.log('Nothing')
}

let p = n2
console.log(p.val)
p = p.next
console.log(p.val)
console.log(n2.val)
