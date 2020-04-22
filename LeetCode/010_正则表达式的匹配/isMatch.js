/*给你一个字符串 s 和一个字符规律 p，请你来实现一个支持 '.' 和 '*' 的正则表达式匹配。

'.' 匹配任意单个字符
'*' 匹配零个或多个前面的那一个元素
所谓匹配，是要涵盖 整个 字符串 s的，而不是部分字符串。

说明:
s 可能为空，且只包含从 a-z 的小写字母。
p 可能为空，且只包含从 a-z 的小写字母，以及字符 . 和 *。

        示例 1:
        输入:
        s = "aa"
        p = "a"
        输出: false
        解释: "a" 无法匹配 "aa" 整个字符串。

        示例 2:
        输入:
        s = "aa"
        p = "a*"
        输出: true
        解释: 因为 '*' 代表可以匹配零个或多个前面的那一个元素, 在这里前面的元素就是 'a'。因此，字符串 "aa" 可被视为 'a' 重复了一次。

        示例 3:
        输入:
        s = "ab"
        p = ".*"
        输出: true
        解释: ".*" 表示可匹配零个或多个（'*'）任意字符（'.'）。

        示例 4:
        输入:
        s = "aab"
        p = "c*a*b"
        输出: true
        解释: 因为 '*' 表示零个或多个，这里 'c' 为 0 个, 'a' 被重复一次。因此可以匹配字符串 "aab"。

        示例 5:
        输入:
        s = "mississippi"
        p = "mis*is*p*."
        输出: false

*/

/**
* @param {string} s
* @param {string} p
* @return {boolean}
*/
//递归算法
var isMatch = function (s, p) {
    if (p == '' || !p) {
        return s == ''
    }
    if (p.charAt(0) == '*') {
        return isMatch(s, p.substring(1))
    }
    // 判断 s 是否为空 防止越界，如果 s 为空，表达式直接为 false , s.charAt(0) 就不会执行了
    var first_match = (s && (p.charAt(0) == s.charAt(0) || p.charAt(0) == '.'))
    // 当长度大于2的时候，才考虑 *
    // ---两种情况
    //p 直接跳过两个字符，表示  * 前边的字符出现 0 次
    //p 不变，接着用第一个字符和前面比较，表示 * 用前一个字符替代 【s = aa , p = a*】
    if (p.length >= 2 && p.charAt(1) == '*') {
        return (
            isMatch(s, p.substring(2)) ||
            (first_match && isMatch(s.substring(1), p))
        )
    } else {
        return first_match && isMatch(s.substring(1), p.substring(1))
    }
}

console.log(isMatch('aaac', '.**ac'))

/* 动态规划算法 */

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch2 = function (s, p) {

};

console.log(isMatch('aaac', '.**ac'))
