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
class HashTable {
    constructor() {
        this.count = 0
        this.limit = 7
        this.storage = []
    }
    get size() {
        return this.count
    }
    get isEmpty() {
        return this.count === 0
    }
    toString() {

    }
    getHash(key) {
        let hashCode = 0
        for (let i = 0; i < key.length; i++) {
            hashCode = 37 * hashCode + key.charCodeAt(i)
        }
        let index = hashCode % this.limit
        return index
    }
    getData() {
        for (let i = 0; i < this.limit; i++) {
            if (this.storage[i]) {
                console.log(this.storage[i].value)
            }
        }
    }
    put(key, value) {
        let index = this.getHash(key)
        if (this.storage[index]) {
            let pointer = this.storage[index].head
            for (let i = 0; i < this.storage[index].length; i++) {
                if (pointer.value.key === key) {
                    pointer.value.value = value
                    return
                }
            }
            this.storage[index].append({ key, value })
            this.count++
        } else {
            this.storage[index] = new LinkedList()
            this.storage[index].append({ key, value })
            this.count++
        }
        //这里只考虑自动扩容,不考虑缩容
        let load = this.count / this.limit
        if (load >= 0.75) {
            this.resize()
        }
    }
    get(key) {
        if (this.count) {
            let index = this.getHash(key)
            let pointer = this.storage[index].head
            for (let i = 0; i < this.storage[index].length; i++) {
                if (pointer.value.key === key) {
                    return pointer.value
                }
                pointer = pointer.next
            }
        }
        return null
    }
    remove(key) {
        let index = this.getHash(key)
        let res = this.get(key)
        if (res) {
            this.storage[index].remove(res)
            this.count--
        }
    }
    resize() {
        let newLimit = this.limit * 2
        while (!this.isPrime(newLimit)) {
            newLimit++
        }
        this.limit = newLimit
        let count = this.count
        this.count = 0
        let oldStorage = this.storage
        this.storage = []
        let index_num = 0
        while (count !== this.count) {
            if (oldStorage[index_num]) {
                let pointer = oldStorage[index_num].head
                while (pointer) {
                    this.put(pointer.value.key, pointer.value.value)
                    pointer = pointer.next
                }
            }
            index_num++
        }
    }
    isPrime(num) {
        if (num === 0 && num === 1) {
            return true
        }
        let temp = parseInt(Math.sqrt(num))
        for (let i = 2; i <= temp; i++) {
            if (num % i === 0) {
                return false
            }
        }
        return true
    }
}

