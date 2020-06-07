function str2Str(str) {
    let res = ''
    let len = 1;
    for (let i = 0; i < str.length; i++) {
        if (!(i + 1) || str.charAt(i) !== str.charAt(i + 1)) {
            res = res + len + str.charAt(i)
            len = 1
        } else {
            len++
        }
    }
    return res
}

// let str = str2Str('1211')
// console.log(str)

let replaceTest = (str) => {
    str.replace(/(\d)\1*/g, item => {
        console.log(item, item.length, item[0])
    })
}
let replaceTest2 = (str) => {
    str.replace(/(\d)*/g, item => {
        console.log(item, item.length, item[0])
    })
}
let str = '12231'
replaceTest(str)
console.log('====================')
replaceTest2(str)

// '1231'.replace('11', item => {
//     console.log(item)
// })
