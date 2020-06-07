/*
「外观数列」是一个整数序列，从数字 1 开始，序列中的每一项都是对前一项的描述。前五项如下：
    1.     1
    2.     11
    3.     21
    4.     1211
    5.     111221
    6.     312211
    7.     13112221

1 被读作  "one 1"  ("一个一") , 即 11。
11 被读作 "two 1s" ("两个一"）, 即 21。
21 被读作 "one 2",  "one 1" （"一个二" ,  "一个一") , 即 1211。
给定一个正整数 n（1 ≤ n ≤ 30），输出外观数列的第 n 项。
注意：整数序列中的每一项将表示为一个字符串。
*/

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
    function str2Str(str) {
        let res = ''
        let len = 1;
        for (let i = 0; i < str.length; i++) {
            if (!(i + 1) || str.charAt(i) !== str.charAt(i + 1)) {
                res = res + len + str.charAt(i)
                len = 1
            } else {
                len++
            }
        }
        return res
    }
    function n2Str(n) {
        if (n == 1) {
            return '1'
        }
        return str2Str(n2Str(n - 1))
    }
    return n2Str(n)
};

//很奇妙的正则解法
var countAndSay2 = function (n) {
    let prev = '1'
    for (let i = 1; i < n; i++) {
        prev = prev.replace(/(\d)\1*/g, item => `${item.length}${item[0]}`)
    }
    return prev
};

let str = countAndSay(6)
let str2 = countAndSay2(6)

console.log(str)
console.log(str2)
