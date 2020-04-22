/*
给定一个可能包含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。
说明：解集不能包含重复的子集。
示例:
    输入: [1,2,2]
    输出:
        [
        [2],
        [1],
        [1,2,2],
        [2,2],
        [1,2],
        []
        ]
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
    nums.sort((a, b) => a - b)
    let res = []
    let temp = []
    let hash = {}
    let backFun = (temp, start) => {
        res.push(temp)
        for (let i = start; i < nums.length; i++) {
            if (i > 0 && !hash[i - 1] && nums[i - 1] == nums[i]) continue
            temp.push(nums[i])
            hash[i] = true
            backFun(temp.slice(), i + 1)
            hash[i] = false
            temp.pop()
        }
    }
    backFun(temp, 0)
    return res
}

let nums = [1, 2, 2]
nums = [0]
nums = [1, 1]
nums = []
nums = [1, 1, 1]
nums = [1, 1, 2, 2]
// nums = [1, 1, 2, 2, 2]
console.log(subsetsWithDup(nums))
