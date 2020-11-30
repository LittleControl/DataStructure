function formatArr(arr) {
    for (let i = 0; ; i++) {
        if (i === arr.length) {
            break
        }
        if (arr[i] === arr[i + 1]) {
            arr.splice(i + 1, 1)
            i--
        }
    }
}

let arr = [1, 1, 1, 2, 2, 3, 3, 4, 5]
formatArr(nums)
console.log(nums)
