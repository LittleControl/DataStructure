/*
描述
    给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
示例
    输入: "abcabcbb"
    输出: 3
    解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
    ===========================
    输入: "bbbbb"
    输出: 1
    解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
    ====================
    输入: "pwwkew"
    输出: 3
    解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
         请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。

*/
/**
 * @param {string} s
 * @return {number}
 */

let str = 'pwwwkew'
// str = 'wwwwwwwwww'
str = " "
// str = 'dvdf'
// str = 'abcabcbb'

var lengthOfLongestSubstring = function (s) {
    let res = 0
    let arr = []
    for (let item of s) {
        if (arr.includes(item)) {
            let index = arr.indexOf(item)
            arr = arr.splice(index + 1)
        }
        arr.push(item)
        res = res > arr.length ? res : arr.length
    }
    return res
};

console.log(lengthOfLongestSubstring(str))
