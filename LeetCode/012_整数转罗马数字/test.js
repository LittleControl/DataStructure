let temp = []
let _deconstruction = (number) => {
    let divisor = 1000
    while (divisor > 1) {
        let num = Math.floor(number / divisor % 10)
        if (num > 0) {
            temp.push(num * divisor)
        }
        divisor /= 10
    }
    temp.push(number % 10)
}
// _deconstruction(234)
// console.log(temp)

let getDigit = (number) => {
    let res = []
    let digit = 0
    let divisor = 1
    while ((number % divisor) > 0) {
        digit++
        divisor *= 10
    }
    res.push(digit, divisor)
    return res
}

// let res = getDigit(1000)
// console.log(res)
let str = 'X'
console.log(str * 3)
