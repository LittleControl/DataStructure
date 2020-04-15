/*
给定一个包含 n 个整数的数组 nums 和一个目标值 target，判断 nums 中是否存在四个元素 a，b，c 和 d ，使得 a + b + c + d 的值与 target 相等？找出所有满足条件且不重复的四元组。

注意：
答案中不可以包含重复的四元组。

示例：
    给定数组 nums = [1, 0, -1, 0, -2, 2]，和 target = 0。
    满足要求的四元组集合为：
    [
    [-1,  0, 0, 1],
    [-2, -1, 1, 2],
    [-2,  0, 0, 2]
    ]
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    let res = []
    if (nums.length < 4) return res
    nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length - 3; i++) {
        if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) break
        if (nums[i] + nums[nums.length - 1] + nums[nums.length - 2] + nums[nums.length - 3] < target) continue
        if (i > 0 && nums[i] == nums[i - 1]) continue
        for (let j = i + 1; j < nums.length - 2; j++) {
            if (j > i + 1 && nums[j] == nums[j - 1]) continue
            if (nums[i] + nums[j] + nums[j + 1] + nums[j + 2] > target) continue
            if (nums[i] + nums[j] + nums[nums.length - 1] + nums[nums.length - 2] < target) continue
            let k = j + 1
            let l = nums.length - 1
            while (k < l) {
                let sum = nums[i] + nums[j] + nums[k] + nums[l]
                if (sum == target) {
                    res.push([nums[i], nums[j], nums[k], nums[l]])
                    while (k < l && nums[k] == nums[k + 1]) k++
                    while (k < l && nums[l] == nums[l - 1]) l--
                    k++
                    l--
                }
                if (sum < target) k++
                if (sum > target) l--
            }
        }
    }
    return res
}

let nums = [1, 0, -1, 0, -2, 2]
// nums = [0, 0, 0, 0]
let target = 0
// target = 1
// nums = [-3, -1, 0, 2, 4, 5]
// target = 0
nums = [-3, -2, -1, 0, 0, 1, 2, 3]
target = 0
console.log(fourSum(nums, target))
