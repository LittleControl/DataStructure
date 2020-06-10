/* 
给定一个可包含重复数字的序列，返回所有不重复的全排列。
示例:
输入: [1,1,2]
输出:
    [
    [1,1,2],
    [1,2,1],
    [2,1,1]
    ]
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    let n = nums.length
    nums.sort((a, b) => a - b)
    let res = []
    let tmpPath = []
    let hash = {}
    let backtrack = (tmpPath) => {
        if (tmpPath.length == n) {
            res.push(tmpPath)
            return
        }
        for (let i = 0; i < n; i++) {
            if (hash[i] || (i > 0 && !hash[i - 1] && nums[i - 1] == nums[i])) continue
            hash[i] = true
            tmpPath.push(nums[i])
            backtrack(tmpPath.slice())
            hash[i] = false
            tmpPath.pop()
        }
    }
    backtrack(tmpPath)
    return res
}
console.log(permuteUnique([2, 1, 1]))
