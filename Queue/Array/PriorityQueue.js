class PriorityQueue {
    constructor() {
        this.__value = Array.prototype.slice.call(arguments)
    }
    get isEmpty() {
        return this.__value.length === 0
    }
    get head() {
        if (this.isEmpty) {
            return this.__value[0]
        }
    }
    get tail() {
        if (this.isEmpty) {
            return this.__value[this.__value.length - 1]
        }
    }
    get size() {
        return this.__value.length
    }
    push(element, priority) {
        if (this.isEmpty) {
            this.__value.push({
                element,
                priority
            })
        } else {
            let tag = false
            for (let i = 0; i < this.size; i++) {
                if (this.__value[i].priority < priority) {
                    this.__value.splice(i, 0, { element, priority })
                    tag = true
                    break
                }
            }
            if (!tag) {
                this.__value.push({ element, priority })
            }
        }
    }
    pop() {
        return this.__value.pop()
    }
    toString() {
        return this.__value.toString()
    }

}

let pq = new PriorityQueue({ element: 'LittleControl', priority: 3 })

console.log(pq)
pq.push('Rain', 5)
console.log(pq)
