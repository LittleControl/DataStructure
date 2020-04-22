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
        if (pointer) {
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
    remove(value) {
        let pointer = this.root
        let front = pointer
        while (pointer) {
            if (pointer.value == value) {
                let isLeft
                front.left == pointer ? isLeft = true : isLeft = false
                if (pointer.left == null && pointer.right == null) {
                    //要删除的节点没有孩子
                    if (pointer == this.root) {
                        this.root.value == null
                    } else {
                        if (isLeft) {
                            front.left = null
                        } else {
                            front.right = null
                        }
                        return
                    }
                }
                if ((pointer.left == null && pointer.right != null) || (pointer.right == null && pointer.left != null)) {
                    // 要删除的节点只有一个孩子
                    if (pointer = this.root) {
                        this.root.left = null
                        this.root.right = null
                        return
                    }
                    if (isLeft) {
                        pointer.left == null ? front.left = pointer.right : front.left = pointer.left
                    } else {
                        pointer.left == null ? front.right = pointer.right : front.right = pointer.left
                    }
                    return
                }
                if (pointer.left != null && pointer.right != null) {
                    //这里使用要删除的结点的前继节点来代替位置
                    let min = pointer.left
                    let fmin = min
                    while (min.right) {
                        fmin = min
                        min = min.right
                    }
                    fmin.right = null
                    min.left = pointer.left
                    min.right = pointer.right
                    if (pointer == this.root) {
                        this.root = min
                    }
                    return
                }
            }
            front = pointer
            if (value < pointer.value) {
                pointer = pointer.left
            }
            if (value > front.value) {
                pointer = front.right
            }
        }
    }
}

let bt = new BinaryTree()
bt.insert(44)
bt.insert(21)
bt.insert(65)
bt.insert(14)
bt.insert(32)
bt.insert(58)
bt.insert(72)
bt.insert(80)
bt.remove(44)
bt.inOrderTraverse()
