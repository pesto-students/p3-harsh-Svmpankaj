var head;

class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
    }
}

function reverse(node) {
    var prev = null;
    var current = node;
    var next = null;
    while (current != null) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    node = prev;
    return node;
}
function printList(node) {
    while (node != null) {
        console.log(node.data + " ");
        node = node.next;
    }
}

head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);

console.log("Given Linked list");
printList(head);
head = reverse(head);
console.log("Reversed linked list");
printList(head);
