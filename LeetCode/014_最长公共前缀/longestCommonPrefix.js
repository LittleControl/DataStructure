/*
编写一个函数来查找字符串数组中的最长公共前缀。
如果不存在公共前缀，返回空字符串 ""。
示例 1:
    输入: ["flower","flow","flight"]
    输出: "fl"
示例 2:
    输入: ["dog","racecar","car"]
    输出: ""
    解释: 输入不存在公共前缀。
说明:
    所有输入只包含小写字母 a-z 。
*/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (!strs || strs.length == 0) return ''
    strs.sort()
    let start = strs[0]
    let end = strs[strs.length - 1]
    if (start == end || end.indexOf(start) == 0) return start
    for (let i = 0; i < start.length; i++) {
        if (start.charAt(i) != end.charAt(i)) return start.substring(0, i)
    }
}

let strs = ['abc', 'ab', 'abbd']
strs = []
console.log(longestCommonPrefix(strs))
