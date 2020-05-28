/*

数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
示例：
    输入：n = 3
    输出：[
        "((()))",
        "(()())",
        "(())()",
        "()(())",
        "()()()"
        ]

*/

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    let res = []
    let temp = (str, left, right) => {
        if (str.length == n * 2) {
            res.push(str)
            return
        }
        if (left < n) {
            temp(str + '(', left + 1, right)
        }
        if (left > right) {
            temp(str + ')', left, right + 1)
        }
    }
    temp('', 0, 0)
    return res
}
let arr = generateParenthesis(3)
console.log(arr)
