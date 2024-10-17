"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const treeify = require('object-treeify');
class Tree {
    constructor() {
        this.nodes = {};
    }
    insert(child, value = new Tree()) {
        this.nodes[child] = value;
        return this;
    }
    search(key) {
        for (const child of Object.keys(this.nodes)) {
            if (child === key) {
                return this.nodes[child];
            }
            const c = this.nodes[child].search(key);
            if (c)
                return c;
        }
    }
    // tslint:disable-next-line:no-console
    display(logger = console.log) {
        const addNodes = function (nodes) {
            const tree = {};
            for (const p of Object.keys(nodes)) {
                tree[p] = addNodes(nodes[p].nodes);
            }
            return tree;
        };
        const tree = addNodes(this.nodes);
        logger(treeify(tree));
    }
}
exports.Tree = Tree;
function tree() {
    return new Tree();
}
exports.default = tree;
