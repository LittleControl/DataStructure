let arr = ['a', 'b', 'c', 'd']
for (let item of arr) {
    item = 1
}
console.log(arr)
console.log('==================')
for (let item in arr) {
    console.log(item)
}
