/* 
示例：
    输入：[1,8,6,2,5,4,8,3,7]
    输出：49
*/

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let len = height.length
    let res = height[0]
    let tag = 0
    let sum = 0
    while (tag < len) {
        for (let i = 1; i < len; i++) {
            temp = Math.min(height[tag], height[i])
            sum = temp * (i - tag)
            if (sum > res) {
                res = sum
            }
        }
        tag++
    }
    return res
}

//双指针
let solution = (height) => {
    let res = 0
    let temp = 0
    for (let left = 0, right = height.length - 1; left < right;) {
        temp = Math.min(height[left], height[right]) * (right - left)
        res = Math.max(res, temp)
        if (height[left] < height[right]) {
            left++
        } else {
            right--
        }
    }
    return res
}

let nums = [1, 8, 6, 2, 5, 4, 8, 3, 7]
// nums = [1, 2]
// console.log(maxArea(nums))
console.log(solution(nums))
