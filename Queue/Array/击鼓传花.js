/* 


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

function hitHop(arr, num) {
    let queue = new Queue()
    for (let i in arr) {
        queue.push(arr[i])
    }
    while (queue.size != 1) {
        let count = 0
        while (count != num - 1) {
            count++
            queue.push(queue.pop())
        }
        console.log('pop', queue.pop())
        count = 0
    }
    return 'The Last Person : ' + queue.pop()
}

let arr = ['LittleControl', 'Avalon', 'RainSorrow', 'Nothing', 'Alice', 'Cool']
console.log(hitHop(arr, 5))
