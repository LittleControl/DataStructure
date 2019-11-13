class Node {
    constructor(value) {
        this.front = null
        this.value = value
        this.next = null
    }
}

class DoubleLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }
    get size() {
        return this.length
    }
    get isEmpty() {
        return this.length === 0
    }
    get value() {
        let str = ''
        let head = this.head
        for (let i = 0; i < this.length; i++) {
            str += head.value
            head = head.next
            if (head) {
                str += '->'
            }
        }
        return str
    }
    append(value) {
        let node = new Node(value)
        if (this.isEmpty) {
            this.head = node
            this.tail = node
        } else {
            this.tail.next = node
            node.front = this.tail
            this.tail = node
        }
        this.length++
    }
    insert(value, position) {
        let node = new Node(value)
        if (this.length >= position) {
            let count = 1
            let pointer = this.head
            while (count !== position) {
                pointer = pointer.next
                count++
            }
            node.front = pointer.front
            node.next = pointer
            node.front.next = node
            node.next.front = node
            pointer = null
        } else {
            this.append(value)
        }
        this.length++
    }
    remove(value) {
        let pointer = this.head
        for (let i = 0; i < this.length; i++) {
            if (pointer.value === value) {
                if (pointer === this.head) {
                    this.head = this.head.next
                    this.head.front = null
                } else {
                    pointer.front.next = pointer.next
                }
                this.length--
                break
            } else {
                pointer = pointer.next
            }
        }
        return pointer.value
    }
    removeAt(position) {
        let pointer = this.head
        if (this.length >= position) {
            if (this.length === position) {
                if (this.length === 1) {
                    this.constructor()//初始化
                } else {
                    this.tail = this.tail.front
                    this.tail.next = null
                }
            } else {
                let count = 1
                while (count !== position) {
                    pointer = pointer.next
                    count++
                }
                if (count === 1) {
                    this.head = this.head.next
                    this.head.front = null
                } else {
                    pointer.front.next = pointer.next
                }
            }
            this.length--
            return pointer.value
        }
    }
    update(oldValue, newValue) {
        let pointer = this.head
        while (pointer && pointer.value !== oldValue) {
            pointer = pointer.next
        }
        if (pointer.value === oldValue) {
            pointer.value = newValue
        }
        console.log(this.tail === pointer)
    }
    updateAt(position, newValue) {
        if (this.length >= position) {
            let pointer = this.head
            let count = 1
            while (count !== position) {
                pointer = pointer.next
            }
            pointer.value = newValue
        } else {
            this.append(newValue)
        }
    }
    indexOf(value) {
        let count = 1
        let pointer = this.head
        while (pointer && pointer.value !== value) {
            pointer = pointer.next
            count++
        }
        if (pointer.value === value) {
            return count
        }
        return -1
    }
    index(position) {
        if (this.length >= position) {
            let count = 1
            let pointer = this.head
            while (count !== position) {
                pointer = pointer.next
                count++
            }
            return pointer.value
        }
        return null
    }
}

let t0 = new DoubleLinkedList()
t0.append('Nothing')
t0.append('Control')
t0.append('Little')
t0.insert('Rain', 2)
t0.insert('Sorrow', 3)
console.log(t0.value)
t0.remove('Nothing')
t0.removeAt(4)
console.log(t0.value)
//Rain->Sorrow->Control
t0.update('Control', 'Sky')
t0.update('Sky', 'Spirit')
console.log(t0.value)
//Rain->Sorrow->Spirit
t0.updateAt(6, 'Cool')
//Rain->Sorrow->Spirit->Cool
console.log(t0.value)
console.log(t0.index(3))
console.log(t0.indexOf('Cool'))

