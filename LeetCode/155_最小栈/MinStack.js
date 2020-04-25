/*
设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。

push(x) —— 将元素 x 推入栈中。
pop() —— 删除栈顶的元素。
top() —— 获取栈顶元素。
getMin() —— 检索栈中的最小元素。
*/

/**
 * initialize your data structure here.
 */
var MinStack = function () {
    this._data = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
    this._data.push(x)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    if (this._data.length == 0) {
        return
    }
    return this._data.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    if (this._data.length == 0) {
        return
    }
    return this._data[this._data.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    if (this._data.length == 0) {
        return
    }
    let min = this._data[0]
    for (let i = 1; i < this._data.length; i++) {
        min = Math.min(min, this._data[i])
    }
    return min
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

let obj = new MinStack()
obj.push(1)
obj.push(2)
let num1 = obj.top()
let num2 = obj.getMin()
console.log(num1, num2)
