/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let length = nums.length
  if (length === 0) {
    return 0
  }
  let tag = length - 1
  let temp = 0
  for (let i = 0; i < length; i++) {
    if (i === tag) {
      break
    }
    if (nums[i] === val) {
      temp = nums[i]
      nums[i] = nums[tag]
      nums[tag] = temp
      tag--
      i--
    }
  }
  console.log(nums)
  console.log(tag)
  return nums[tag] === val ? tag + 1 : tag
};

let nums = [3, 2, 2, 3]
nums = [0, 1, 2, 2, 3, 0, 4, 2]
removeElement(nums, 2)
