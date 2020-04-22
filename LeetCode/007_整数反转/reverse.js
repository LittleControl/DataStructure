/*
描述
    给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。

    示例 1:
    输入: 123
    输出: 321

    示例 2:
    输入: -123
    输出: -321

    示例 3:
    输入: 120
    输出: 21

*/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let sign = true
    if (x < 0) {
        sign = false
    }
    let str = x + ''
    let arr = str.split('')
    arr.reverse()
    let str2 = arr.join('')
    let res = parseInt(str2)
    if (res > 2147483647 || res < -2147483648) {
        return 0
    }
    if (sign) {
        return res
    } else {
        return -1 * res
    }
};