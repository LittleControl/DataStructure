/*
给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。

注意：答案中不可以包含重复的三元组。

示例：
    给定数组 nums = [-1, 0, 1, 2, -1, -4]，
    满足要求的三元组集合为：
    [
        [-1, 0, 1],
        [-1, -1, 2]
    ]
 */

/**
* @param {number[]} nums
* @return {number[][]}
*/
var threeSum = function (nums) {
    let res = []
    if (nums.length < 3) {
        return res
    }
    nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] > 0) {
            break
        }
        if (i > 0 && nums[i] == nums[i - 1]) {
            continue
        }
        let j = i + 1
        let k = nums.length - 1
        while (j < k) {
            let add = nums[i] + nums[j] + nums[k]
            if (add == 0) {
                res.push([nums[i], nums[j], nums[k]])
                while (nums[j] == nums[j + 1] && j < k) {
                    j++
                }
                while (nums[k] == nums[k - 1] && j < k) {
                    k--
                }
                k--
                j++
            }
            if (add < 0) {
                j++
            }
            if (add > 0) {
                k--
            }
        }
    }
    return res
};

let nums = [0, 0, 0, 0, 0]
nums = [-1, 0, 1, 2, -1, -4]
nums = [-1, 0, 1, 0]
nums = [-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6]
// nums = [-4, -2, 1, -5, -4, -4, 4, -2, 0, 4, 0, -2, 3, 1, -5, 0]
console.log(threeSum(nums))
