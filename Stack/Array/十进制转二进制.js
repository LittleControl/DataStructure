class Stack {
    constructor() {
        this.__value = Array.prototype.slice.call(arguments)
    }
    pop() {
        return this.__value.pop()
    }
    push(value) {
        this.__value.push(value)
    }
    get size() {
        return this.__value.length
    }
    get peek() {
        return this.__value[this.__value.length - 1]
    }
    get isEmpty() {
        return this.__value.length === 0
    }
    toString() {
        return this.__value.toString()
    }
}

function D2B(dnum) {
    let stack = new Stack()
    while (dnum) {
        stack.push(dnum % 2)
        dnum = parseInt(dnum / 2)
    }
    //用字符串来表示二进制
    let res = ''
    while (!stack.isEmpty) {
        res += stack.pop()
    }
    return res
}

let t0 = D2B(8)
console.log(t0)
