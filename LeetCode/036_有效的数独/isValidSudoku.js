/*
判断一个 9x9 的数独是否有效。只需要根据以下规则，验证已经填入的数字是否有效即可。

数字 1-9 在每一行只能出现一次。
数字 1-9 在每一列只能出现一次。
数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。
*/

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    //判断横竖是否合格
    let fun1 = (arr, first, second, val) => {
        if (arr[first].indexOf(val) !== arr[first].lastIndexOf(val)) {
            return false
        }
        let temp = []
        let length = arr.length
        for (let i = 0; i < length; i++) {
            if (arr[i][second] !== '.') {
                if (temp.includes(arr[i][second])) {
                    return false
                }
                temp.push(arr[i][second])
            }
        }
        return true
    }
    //判断小九宫格是否合格
    let fun2 = (arr, first, second) => {
        let temp = []
        const coors = [
            [first, second], [first, second + 1], [first, second + 2],
            [first + 1, second], [first + 1, second + 1], [first + 1, second + 2],
            [first + 2, second], [first + 2, second + 1], [first + 2, second + 2]
        ]
        for (let i = 0; i < 9; i++) {
            let value = arr[coors[i][0]][coors[i][1]]
            if (value !== '.') {
                if (temp.includes(value)) {
                    return false
                }
                temp.push(value)
            }
        }
        return true
    }
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] === '.') {
                continue
            }
            if (!fun1(board, i, j, board[i][j])) {
                // console.log(false)
                return false
            }
        }
    }
    const indexs = [
        [0, 0], [0, 3], [0, 6],
        [3, 0], [3, 3], [3, 6],
        [6, 0], [6, 3], [6, 6]
    ]
    for (let i = 0; i < 9; i++) {
        if (!fun2(board, indexs[i][0], indexs[i][1])) {
            return false
        }
    }
    return true
}

let arr = [
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
]
arr = [
    ["8", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
]

console.log(isValidSudoku(arr))
