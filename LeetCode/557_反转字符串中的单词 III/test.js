let str = '12 23 34 45 56 7'
let arr = str.split(' ')
// console.log(arr)
// console.log(arr.join(''))
// console.log(arr)
function reverse(str) {
    let arr = str.split('')
    arr.reverse()
    return arr.join('')
}

// for (let i = 0; i < arr.length; i++) {
//     arr[i] = reverse(arr[i])
// }
// console.log(arr)

let arr2 = ['ab', 'cd', 'ef']
console.log(arr2.join(' '))
