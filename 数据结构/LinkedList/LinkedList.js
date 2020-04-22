class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.length = 0
    }
    get size() {
        return this.length
    }
    get isEmpty() {
        return this.length === 0
    }
    get value() {
        let value = []
        let head = this.head
        for (let i = 0; i < this.length; i++) {
            value[i] = head.value || ''
            head = head.next
        }
        return value
    }
    append(value) {
        let node = new Node(value)
        if (this.length) {
            let tail = this.head
            while (tail.next) {
                tail = tail.next
            }
            tail.next = node
            this.length++
        } else {
            this.head = node
            this.length++
        }
    }
    insert(value, position) {
        let node = new Node(value)
        if (this.length) {
            let tail = this.head
            let count = 1
            while (count !== position && tail.next) {
                tail = tail.next
                count++
            }
            node.next = tail.next
            tail.next = node
            this.length++
        } else {
            this.head = node
            this.length++
        }
    }
    remove(value) {
        if (this.length) {
            let tag = this.head
            let front = this.head
            while (tag) {
                if (tag.value === value) {
                    if (tag === this.head) {
                        this.head = this.head.next
                    } else {
                        front.next = tag.next
                    }
                    this.length--
                    break
                } else {
                    front = tag
                    tag = tag.next
                }
            }
        }
    }
    removeAt(num) {
        if (this.length >= num) {
            let tag = this.head
            let front = this.head
            let count = 1
            while (count !== num) {
                front = tag
                tag = tag.next
                count++
            }
            front.next = tag.next || null
            this.length--
        }
    }
    update(position, value) {
        if (this.length >= position) {
            let count = 1
            let pointer = this.head
            while (count !== position) {
                pointer = pointer.next
                count++
            }
            pointer.value = value
        } else {
            this.append(value)
        }
    }
    get(position) {
        if (this.length >= position) {
            let pointer = this.head
            let count = 1
            while (count !== position) {
                pointer = pointer.next
                count++
            }
            return pointer.value
        }
    }
    indexOf(value) {
        let pointer = this.head
        let count = 1
        if (pointer) {
            while (pointer && pointer.value !== value) {
                pointer = pointer.next
                count++
            }
            if (pointer && pointer.value === value) {
                return count
            }
        }
        return undefined
    }
    toString() {
        let str = ''
        let pointer = this.head
        while (pointer) {
            str += pointer.value
            if (pointer.next) {
                str += '->'
            }
            pointer = pointer.next
        }
        return str
    }

}

let ll = new LinkedList()
ll.append('Nothing')
ll.append('Control')
ll.append('Rain')
console.log(ll.value)
console.log(ll.indexOf('Nothing'))
console.log(ll.indexOf('Rain'))
console.log(ll.indexOf('Little'))
console.log(ll)

