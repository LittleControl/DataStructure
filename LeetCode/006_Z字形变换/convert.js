/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    if (numRows == 1) {
        return s
    }
    let arrs = []
    for (let i = 0; i < numRows; i++) {
        arrs.push(new Array())
    }
    let x = 0
    let y = 0;
    for (let i = 0; i < s.length; i++) {
        arrs[y].push(s.charAt(i))
        if (x % (numRows - 1) == 0) {
            if (y == numRows - 1) {
                x++
                y--
            } else {
                y++
            }
        } else {
            y--
            x++
        }
    }
    let res = ''
    for (const arr of arrs) {
        res += arr.join('')
    }
    return res
}

let convert2 = function (s, numRows) {
    if (numRows == 1) {
        return s
    }
    let arrs = []
    for (let i = 0; i < numRows; i++) {
        arrs.push('')
    }
    let x = 0
    let y = 0;
    for (let i = 0; i < s.length; i++) {
        arrs[y] += s.charAt(i)
        if (x % (numRows - 1) == 0) {
            if (y == numRows - 1) {
                x++
                y--
            } else {
                y++
            }
        } else {
            y--
            x++
        }
    }
    return arrs.join('')
}

console.log(convert('nothingtodo', 4))
console.log(convert2('nothingtodo', 4))