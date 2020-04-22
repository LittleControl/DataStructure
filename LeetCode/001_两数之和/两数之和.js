/* 
    给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
    你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。
    示例
        给定 nums = [2, 7, 11, 15], target = 9
        因为 nums[0] + nums[1] = 2 + 7 = 9
        所以返回 [0, 1]

*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    var temp = [];
    for (var i = 0; i < nums.length; i++) {
        var dif = target - nums[i];
        if (temp[dif] != undefined) {
            return [temp[dif], i];
        }
        //哈希表的思想
        temp[nums[i]] = i;
    }
};
var num = [-1, -2, 11, 15]
console.log(twoSum(num, 9))

/*
    数组的下表也是可以用负数来索引的,但是这里的负数就是称为了一个字符串,类似与这样
    [ 0, 1, 2, 3, 4, '-1': -1, '-2': -2 ]
*/
