/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    for (let i = 0; ; i++) {
        if (i === nums.length) {
            break
        }
        if (nums[i] === nums[i + 1]) {
            nums.splice(i + 1, 1)
            i--
        }
    }
};