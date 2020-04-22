/* 1 7 2 8 2 0 3 7 6 6 */
var arr = [1, 7, 2, 8, 2, 0, 3, 7, 6, 6]
function Ssort(arr) {
    var count = 0;
    while (count != arr.length) {
        var index = arr.length - 1;
        for (var i = arr.length - 1; i > count; i--) {
            arr[i] < arr[i - 1]
                ? 
                    arr[index] > arr[i]
                    ? index = i
                    : index = index
                : 
                    arr[index] > arr[i - 1]
                    ? index = i - 1
                    : index = index
        }
        var temp = arr[count]
        arr[count] = arr[index]
        arr[index] = temp
        count++
    }
}
Ssort(arr)
console.log(arr)