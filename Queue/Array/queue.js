/* 
    队列的基本操作
        入队
        出队
        取队头元素
        取队尾元素
        获得队列长度
        判空

*/

class Queue {
    constructor() {
        this.__value = Array.prototype.slice.call(arguments)
    }
    push(value) {
        this.__value.push(value)
    }
    pop() {
        return this.__value.splice(0, 1)[0]
    }
    get head() {
        return this.__value[0]
    }
    get tail() {
        return this.__value[this.__value.length - 1]
    }
    get size() {
        return this.__value.length
    }
    get isEmpty() {
        return this.__value.length === 0
    }
    toString() {
        return this.__value.toString()
    }

}


let q0 = new Queue()

q0.push(1)
q0.push(2)
q0.push(3)
q0.push(4)
console.log(q0)
console.log(q0.head)
console.log(q0.tail)
q0.pop()
q0.pop()
q0.pop()
console.log(q0)



