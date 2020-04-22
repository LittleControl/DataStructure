/* 1 7 2 8 2 0 3 7 6 6  */
var arr = [1, 7, 2, 8, 2, 0, 3, 7, 6, 6]
function Qsort(arr, left, right) {
    if (left >= right) {
        return 0
    }
    var index = left
    for (var i = left; i < right; i++) {
        if (arr[i] < arr[right]) {
            var temp = arr[index]
            arr[index] = arr[i]
            arr[i] = temp
            index++
        }
    }
    var temp = arr[right]
    arr[right] = arr[index]
    arr[index] = temp
    Qsort(arr, left, index - 1)
    Qsort(arr, index + 1, right)
}
Qsort(arr, 0, arr.length - 1)
console.log(arr)
function Qsort2(arr, left, right) {
    if (left >= right - 1) {
        return
    }
    var index = left
    for (var i = left; i < right - 1; i++) {
        if (arr[i] < arr[right - 1]) {
            var temp = arr[i]
            arr[i] = arr[index]
            arr[index] = temp
            index++
        }
    }
    var temp = arr[index]
    arr[index] = arr[right - 1]
    arr[right - 1] = temp
    Qsort2(arr, left, index)
    Qsort2(arr, index + 1, right)

}
Qsort2(arr, 0, arr.length)
console.log(arr)


