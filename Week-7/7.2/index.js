var head;

class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
    }
}

function rotate(k) {
    if (k == 0)
        return;
    var current = head;

    var count = 1;
    while (count < k && current != null) {
        current = current.next;
        count++;
    }
    if (current == null)
        return;

    var kthNode = current;
    while (current.next != null)
        current = current.next;
    current.next = head;
    head = kthNode.next;
    kthNode.next = null;
}

function push(new_data) {
    var new_node = new Node(new_data);
    new_node.next = head;
    head = new_node;
}

function printList() {
    var temp = head;
    while (temp != null) {
        console.log(temp.data + " ");
        temp = temp.next;
    }
}
push(9);
push(8);
push(7);
push(4);
push(2);

console.log("Given list");
printList();

rotate(3);

console.log("Rotated Linked List");
printList();

/*
Output:- 8 9 2 4 7
Time Complexity: O(n)
Auxiliary Space : O(1)
*/