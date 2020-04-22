class MySet {
    constructor() {
        this.__value = {}
    }
    get size() {
        return Object.keys(this.__value).length
    }
    has(obj) {
        return this.__value.hasOwnProperty(obj)
    }
    add(value) {
        if (!this.has(value)) {
            this.__value[value] = value
        }
    }
    delete(value) {
        if (this.has(value)) {
            delete this.__value[value]
        }
    }
    update(value) {

    }
    querry(value) {
        if (this.__valu.has(value)) {
            return this.__value[value]
        }
    }
    clear() {
        this.__value = {}
    }
    get values() {
        return Object.keys(this.__value)
    }
    // ===========集合之间的操作方法===========
    union(bSet) {
        let arr_a = this.values
        let arr_b = bSet.values
        let cSet = new MySet()
        for (const item of arr_a) {
            cSet.add(item)
        }
        for (const item of arr_b) {
            if (!this.has(item)) {
                cSet.add(item)
            }
        }
        return cSet
    }
    intersection(bSet) {
        let arr_b = bSet.values
        let cSet = new MySet()
        for (const item of arr_b) {
            if (this.has(item)) {
                cSet.add(item)
            }
        }
        return cSet
    }
    subset(bSet) {
        let arr_b = bSet.values
        for (const item of arr_b) {
            if (!this.has(item)) {
                return false
            }
        }
        return true
    }
    diffset(bSet) {
        if (!bSet.subset(this)) {
            let arr_a = this.values
            let subset = new MySet()
            for (const item of arr_a) {
                if (!bSet.has(item)) {
                    subset.add(item)
                }
            }
            return subset
        }
    }
}

let s0 = new MySet()
s0.add('Rain')
s0.add('Sorrow')
s0.add('Control')
console.log(s0)
let s1 = new MySet()
s1.add('Rain')
s1.add('Sorrow')
s1.add('Spirit')
console.log(s1)
let unionSet = s0.union(s1)
console.log(unionSet)
let intersectionSet = s0.intersection(s1)
console.log(intersectionSet)
let diffset = s0.diffset(s1)
console.log(diffset)
