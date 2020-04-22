/*
给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。
说明：解集不能包含重复的子集。
示例:
    输入: nums = [1,2,3]
    输出:
    [
    [3],
      [1],
      [2],
      [1,2,3],
      [1,3],
      [2,3],
      [1,2],
      []
    ]
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    let res = []
    let temp = []
    let backtrack = (temp, start) => {
        res.push(temp)
        for (let i = start; i < nums.length; i++) {
            if (!temp.includes(nums[i])) {
                temp.push(nums[i])
                backtrack(temp.slice(), i + 1)
                temp.pop()
            }
        }
    }
    backtrack(temp, 0)
    return res
}

let nums = [1, 2, 3]
console.log(subsets(nums))
