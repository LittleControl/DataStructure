/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (needle === '') {
    return 0
  }
  let len1 = haystack.length
  let len2 = needle.length
  if (len1 < len2) {
    return -1
  }
  for (let i = 0; i < len1; i++) {
    // console.log(typeof haystack.slice(i, len2))
    // console.log(haystack.slice(1, len2))
    if (haystack.slice(i, i + len2) === needle) {
      return i
    }
    if (i + len2 > len1) {
      return -1
    }
  }
  return -1
};

let haystack = 'hello'
let needle = 'll'

console.log(strStr(haystack, needle))
