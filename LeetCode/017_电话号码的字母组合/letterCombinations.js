/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    let res = []
    if (digits.length == 0) {
        return res
    }
    const maps = {
        2: "abc",
        3: "def",
        4: "ghi",
        5: "jkl",
        6: "mno",
        7: "pqrs",
        8: "tuv",
        9: "wxyz"
    }
    for (let num of digits) {
        let str = maps[num]
        if (res.length > 0) {
            let temp = []
            for (let i = 0; i < res.length; i++) {
                for (let j = 1; j < str.length; j++) {
                    temp.push(res[i] + str[j])
                }
                res[i] += str[0]
            }
            res.push(...temp)
        } else {
            res.push(...str)
        }
    }
    return res
}

//递归版
let letterCombinations2 = (digits) => {
    if (!digits) {
        return []
    }
    let res = []
    let map = new Map()
    map
        .set('2', 'abc')
        .set('3', 'def')
        .set('4', 'ghi')
        .set('5', 'jkl')
        .set('6', 'mno')
        .set('7', 'pqrs')
        .set('8', 'tuv')
        .set('9', 'wxyz')
    let _temp = (pos, str) => {
        if (str.length == digits.length) {
            res.push(str)
            return
        }
        let map_str = map.get(digits[pos])
        for (let i = 0; i < map_str.length; i++) {
            _temp(pos + 1, str + map_str[i])
        }
    }
    _temp(0, '')
    return res
}

let arr = letterCombinations('234')
let arr2 = letterCombinations2('234')
console.log(arr)
console.log(arr2)
