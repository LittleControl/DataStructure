/*
罗马数字包含以下七种字符： I， V， X， L，C，D 和 M。

字符          数值
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
例如， 罗马数字 2 写做 II ，即为两个并列的 1。12 写做 XII ，即为 X + II 。 27 写做  XXVII, 即为 XX + V + II 。
通常情况下，罗马数字中小的数字在大的数字的右边。但也存在特例，例如 4 不写做 IIII，而是 IV。数字 1 在数字 5 的左边，所表示的数等于大数 5 减小数 1 得到的数值 4 。同样地，数字 9 表示为 IX。这个特殊的规则只适用于以下六种情况：
    I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
    X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。
    C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。
给定一个整数，将其转为罗马数字。输入确保在 1 到 3999 的范围内。

示例 1:
    输入: 3
    输出: "III"
示例 2:
    输入: 4
    输出: "IV"
示例 3:
    输入: 9
    输出: "IX"
示例 4:
    输入: 58
    输出: "LVIII"
    解释: L = 50, V = 5, III = 3.
示例 5:
    输入: 1994
    输出: "MCMXCIV"
    解释: M = 1000, CM = 900, XC = 90, IV = 4.
*/

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
    const maps = new Map([
        [4, 'IV'],
        [9, 'IX'],
        [40, 'XL'],
        [90, 'XC'],
        [400, 'CD'],
        [900, 'CM'],
        [1, 'I'],
        [5, 'V'],
        [10, 'X'],
        [50, 'L'],
        [100, 'C'],
        [500, 'D'],
        [1000, 'M']
    ])
    let temp = []
    let _deconstruction = (number) => {
        let divisor = 1000
        while (divisor > 1) {
            let num = Math.floor(number / divisor % 10)
            if (num > 0) {
                temp.push(num * divisor)
            }
            divisor /= 10
        }
        if ((number % 10) > 0) {
            temp.push(number % 10)
        }
    }
    _deconstruction(num)
    let res = ''
    let repit = (digit, number) => {
        let num = Math.floor(number / digit)
        if (num >= 5) {
            res += maps.get(digit * 5)
            num = num - 5
        }
        for (let i = 0; i < num; i++) {
            res += maps.get(digit)
        }
    }
    for (let i = 0; i < temp.length; i++) {
        if (maps.has(temp[i])) {
            res += maps.get(temp[i])
        } else {
            if (temp[i] > 1000) {
                repit(1000, temp[i])
            }
            else if (temp[i] > 100) {
                repit(100, temp[i])
            }
            else if (temp[i] > 10) {
                repit(10, temp[i])
            }
            else {
                repit(1, temp[i])
            }
        }
    }
    return res
}

//贪心算法
let intToRoman2 = (num) => {
    let keys = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    let values = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
    let res = ''
    let loop = 0
    while (loop < keys.length) {
        while (num >= keys[loop]) {
            num -= keys[loop]
            res += values[loop]
        }
        loop++
    }
    return res
}

console.log(intToRoman(1234))
console.log(intToRoman2(1234))
