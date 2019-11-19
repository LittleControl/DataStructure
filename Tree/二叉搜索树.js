class TreeNode {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinaryTree {
    constructor() {
        this.root = new TreeNode()
    }
    get min() {
        let pointer = this.root.left
        let tag = this.root
        while (pointer) {
            tag = pointer
            pointer = pointer.left
        }
        return tag.value
    }
    get max() {
        let pointer = this.root.right
        let tag = this.root
        while (pointer) {
            tag = pointer
            pointer = pointer.right
        }
        return tag.value
    }
    insert(value) {
        if (!this.root.value) {
            this.root.value = value
        } else {
            if (value > this.root.value) {
                let pointer = this.root.right
                let tag = this.root
                while (pointer) {
                    tag = pointer
                    if (value > pointer.value) {
                        pointer = pointer.right
                    } else {
                        pointer = pointer.left
                    }
                }
                if (value > tag.value) {
                    tag.right = new TreeNode(value)
                } else {
                    tag.left = new TreeNode(value)
                }
            }
            if (value < this.root.value) {
                let pointer = this.root.left
                let tag = this.root
                while (pointer) {
                    tag = pointer
                    if (value > pointer.value) {
                        pointer = pointer.right
                    } else {
                        pointer = pointer.left
                    }
                }
                if (value > tag.value) {
                    tag.right = new TreeNode(value)
                } else {
                    tag.left = new TreeNode(value)
                }
            }
        }
    }
    search(value, root = this.root) {
        let pointer = root
        while (pointer) {
            if (pointer.value === value) {
                return true
            }
            if (pointer.value > value) {
                return this.search(value, pointer.left)
            }
            if (pointer.value < value) {
                return this.search(value, pointer.right)
            }
        }
        return false
    }
    //先序遍历
    preOrderTraverse(root = this.root) {
        let pointer = root
        if (pointer) {
            console.log(pointer.value)
            if (pointer.left) {
                pointer = pointer.left
                if (pointer) {
                    this.preOrderTraverse(pointer)
                }
            }
            pointer = root
            if (pointer.right) {
                pointer = pointer.right
                if (pointer) {
                    this.preOrderTraverse(pointer)
                }
            }
        }
    }
    //中序遍历
    inOrderTraverse(root = this.root) {
        let pointer = root
        if (pointer) {
            if (pointer.left) {
                pointer = pointer.left
                this.inOrderTraverse(pointer)
            }
            console.log(root.value)
            pointer = root
            if (pointer.right) {
                pointer = pointer.right
                this.inOrderTraverse(pointer)
            }
        }
    }
    //后序遍历
    postOrderTraverse(root = this.root) {
        let pointer = root
        if (pointer) {
            if (pointer.left) {
                pointer = pointer.left
                this.postOrderTraverse(pointer)
            }
            pointer = root
            if (pointer.right) {
                pointer = pointer.right
                this.postOrderTraverse(pointer)
            }
            console.log(root.value)
        }

    }
    remove(key) {

    }
}

let bt = new BinaryTree()
bt.insert(18)
bt.insert(14)
bt.insert(22)
bt.insert(7)
bt.insert(35)
bt.insert(3)
bt.insert(11)
bt.insert(27)
// bt.preOrderTraverse()
// bt.inOrderTraverse()
// bt.postOrderTraverse()
console.log(bt.min)
console.log(bt.max)
// console.log(bt)
