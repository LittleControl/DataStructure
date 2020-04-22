/* 
    栈的基本操作有一下几个
    pop 出栈
    push 进栈
    peek 取栈顶元素
    isEmpty 栈是否为空
    size 栈中的元素数量
    
*/

function newStack() {
    this.__value = Array.prototype.slice.call(arguments)
    newStack.prototype.pop = function () {
        return this.__value.pop()
    }
    newStack.prototype.push = function (value) {
        this.__value.push(value)
    }
    newStack.prototype.peek = function () {
        return this.__value[this.__value.length - 1]
    }
    newStack.prototype.size = function () {
        return this.__value.length
    }
    newStack.prototype.toString = function () {
        // console.log(this.__value)
        return this.__value.toString()
    }
    newStack.prototype.isEmpty = function () {
        return this.__value.length === 0
    }
}

let ns1 = new newStack(1, 2, 3)
console.log(ns1)
ns1.pop()
ns1.pop()
console.log(ns1)
ns1.push(5)
ns1.push(6)
console.log(ns1.peek())
console.log(ns1)

