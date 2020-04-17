/*
给定一个非负整数数组，你最初位于数组的第一个位置。
数组中的每个元素代表你在该位置可以跳跃的最大长度。
判断你是否能够到达最后一个位置。
示例 1:
    输入: [2,3,1,1,4]
    输出: true
    解释: 我们可以先跳 1 步，从位置 0 到达 位置 1, 然后再从位置 1 跳 3 步到达最后一个位置。
示例 2:
    输入: [3,2,1,0,4]
    输出: false
    解释: 无论怎样，你总会到达索引为 3 的位置。但该位置的最大跳跃长度是 0 ， 所以你永远不可能到达最后一个位置。
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */

//递归回溯
var canJump = function (nums) {
    let res = false
    let fun = (start) => {
        if (res) return
        if (start >= nums.length - 1 || nums[start] >= nums.length - start - 1) {
            res = true
            return
        }
        if (nums[start] == 0) {
            return
        }
        for (let i = nums[start]; i > 0; i--) {
            fun(i + start)
            if (res) return
        }
    }
    fun(0)
    return res
}

//贪心算法1
let solution1 = (nums) => {
    let len = nums.length - 1
    let leftPos = len
    for (let left = len; left > 0; left--) {
        if (nums[left] + left > leftPos) {
            leftPos = left
        }
    }
    return leftPos == 0
}
//贪心算法2
let solution2 = (nums) => {
    let canJump = 0
    let len = nums.length
    for (let i = 0; i < len; i++) {
        if (i > canJump) return false
        canJump = Math.max(canJump, i + nums[i])
        if (canJump >= len - 1) break
    }
    return true
}


let nums = [2, 3, 1, 1, 4]
nums = [3, 2, 1, 0, 4]
nums = [0]
nums = [0, 1, 2]
nums = [3, 0, 8, 2, 0, 0, 1]
console.log(canJump(nums))
