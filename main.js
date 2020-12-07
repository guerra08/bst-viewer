class BST {
    constructor() {
        this.size = 0;
        this.root = null;
    };

    addNode(val) {
        if (this.root === null) {
            this.root = new TreeNode(val);
            this.root.x = 400,
            this.root.y = 25;
            this.size++;
        }
        else {
            let aux = this.root;
            while (true) {
                if (val > aux.value) {
                    if (aux.rightNode === null) {
                        aux.rightNode = new TreeNode(val);
                        aux.rightNode.x = aux.x + 25;
                        aux.rightNode.y = aux.y + 20;
                        this.size++;
                        break;
                    }
                    else
                        aux = aux.rightNode;
                }
                else {
                    if (aux.leftNode === null) {
                        aux.leftNode = new TreeNode(val);
                        aux.rightNode.x = aux.x - 20;
                        aux.rightNode.x = aux.y + 25;
                        this.size++;
                        break;
                    }
                    else
                        aux = aux.leftNode;
                }
            }
        }
    }

    findMinNode(node){
        if(node.leftNode === null)
            return node;
        else return this.findMinNode(node.leftNode);
    }
}

class TreeNode {
    constructor(val) {
        this.value = val;
        this.leftNode = null;
        this.rightNode = null;
        this.x = -1;
        this.y = -1;
    }
}

let tree = new BST();

function handleAdd(){
    const val = document.querySelector('#add-value').value;
    if(val){
        tree.addNode(parseInt(val));
        this.updateFrontend();
    }
}

function updateFrontend(){
    console.log(tree)
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");
    let aux = tree.root;
    ctx.beginPath();
    ctx.arc(aux.rightNode.x, aux.rightNode.y, 25, 20, 0, 2 * Math.PI);
    ctx.stroke();
}