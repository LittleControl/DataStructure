/*
给出一个区间的集合，请合并所有重叠的区间。
示例 1:
    输入: [[1,3],[2,6],[8,10],[15,18]]
    输出: [[1,6],[8,10],[15,18]]
    解释: 区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
示例 2:
    输入: [[1,4],[4,5]]
    输出: [[1,5]]
    解释: 区间 [1,4] 和 [4,5] 可被视为重叠区间。
*/

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    intervals.sort((a, b) => a[0] - b[0])
    let res = []
    if (intervals.length == 0) {
        return res
    }
    res.push(intervals[0])
    let length = 0
    for (let i = 1; i < intervals.length; i++) {
        if (res[length][1] >= intervals[i][0] && res[length][1] < intervals[i][1]) {
            res[length][1] = intervals[i][1]
        } else if (res[length][1] >= intervals[i][1] && res[length][0] <= intervals[i][0]) {
            continue
        } else {
            res.push(intervals[i])
            length++
        }
    }
    return res
}

let intervals = [[1, 3], [2, 6], [8, 10], [15, 18]]
intervals = [[0, 1], [0, 2]]
intervals = []
console.log(merge(intervals))
