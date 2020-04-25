/*
给定一个二叉树，找出其最大深度。
二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。
说明: 叶子节点是指没有子节点的节点。
示例：
    给定二叉树 [3,9,20,null,null,15,7]，
        3
    / \
    9  20
        /  \
    15   7
    返回它的最大深度 3 。
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

function TreeNode(val) {
    this.val = val
    this.left = this.right = null
}

var maxDepth = function (root) {
    if (root == null) {
        return 0
    }
    let res = 0
    function deep(tree, depth) {
        res = Math.max(res, depth)
        if (tree.left) {
            deep(tree.left, depth + 1)
        }
        if (tree.right) {
            deep(tree.right, depth + 1)
        }
    }
    deep(root, 1)
    return res
}