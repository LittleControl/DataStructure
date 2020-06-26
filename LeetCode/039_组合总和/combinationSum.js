/*
给定一个无重复元素的数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。
candidates 中的数字可以无限制重复被选取。
说明：
    所有数字（包括 target）都是正整数。
    解集不能包含重复的组合。
    示例 1:
    输入: candidates = [2,3,6,7], target = 7,
    所求解集为:
        [
        [7],
        [2,2,3]
        ]
    示例 2:
    输入: candidates = [2,3,5], target = 8,
    所求解集为:
        [
          [2,2,2,2],
          [2,3,3],
          [3,5]
        ]
*/

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    let n = candidates.length
    let res = []
    let tmpArr = []
    candidates = candidates.sort((a, b) => a - b)
    let tmpFun = (tmpArr, target, start) => {
        if (target == 0) {
            res.push(tmpArr)
            return
        }
        for (let i = start; i < n; i++) {
            if (candidates[i] > target) {
                break
            }
            tmpArr.push(candidates[i])
            tmpFun(tmpArr.slice(), target - candidates[i], i)
            tmpArr.pop()
        }
    }
    tmpFun(tmpArr, target, 0)
    return res
}

let candidates = [2, 3, 5]
let target = 8
console.log(combinationSum(candidates, target))
