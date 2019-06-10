/*  3 7 8 5 2 1 9 5 4 */
var arr = [3, 3, 7, 8, 5, 2, 1, 9, 5, 4]
var start1 = new Date()
function Qsort(arr, left, right) {
    if (left >= right) {
        return 0
    }
    var sub = left;
    for (var i = left; i < right; i++) {
        if (arr[i] < arr[right]) {
            var temp = arr[sub]
            arr[sub] = arr[i]
            arr[i] = temp
            sub++;
        }
    }
    var temp = arr[sub]
    arr[sub] = arr[right]
    arr[right] = temp
    Qsort(arr, left, sub - 1)
    Qsort(arr, sub + 1, right)
}
Qsort(arr, 0, arr.length - 1)
var end1 = new Date()
console.log(start1.getTime()-end1.getTime())
console.log(arr)
var start2 = new Date()
var arr2 = [3, 3, 7, 8, 5, 2, 1, 9, 5, 4]
function Bsort(arr){
    for(var i = 0; i < arr.length-1; i++){
        for(var j = 0; j<arr.length-1-i; j++){
            if(arr[j]>arr[j+1]){
                var temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
}
Bsort(arr2)
var end2 = new Date()
console.log(start2.getTime()-end2.getTime())
console.log(arr2)