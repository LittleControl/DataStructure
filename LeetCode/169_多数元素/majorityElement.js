/*
给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。

你可以假设数组是非空的，并且给定的数组总是存在多数元素

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/majority-element
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const res = []
  const length = nums.length
  for (let i = 0; i < length; i++) {
    if (res[nums[i]]) {
      res[nums[i]]++
      if (res[nums[i]] * 2 > length) {
        return nums[i]
      }
    } else {
      res[nums[i]] = 1
    }
  }
  return nums[0]
}

// 随机化
const temp0 = (nums) => {
  const length = nums.length
  const getRandomNum = () => Math.floor(Math.random() * length + 1)
  const loop = (num) => {
    let count = 0
    for (let i = 0; i < length; i++) {
      if (nums[i] === num) {
        count++
      }
    }
    return count
  }
  while (true) {
    let randomNum = getRandomNum()
    if (loop(randomNum) * 2 > length) {
      return randomNum
    }
  }
}

// Boyer-Moore 投票算法
const temp1 = (nums) => {
  let count = 0
  let temp = 0
  const length = nums.length
  for (let i = 0; i < length; i++) {
    if (count === 0) {
      temp = nums[i]
      count++
    }
    temp === nums[i] ? count++ : count--
  }
  return temp
}

let arr = [1]
// arr = [1, 2, 2, 1, 2, 2, 2, 2]
// console.log(majorityElement(arr))
console.log(temp0(arr))
// console.log(temp1(arr))
