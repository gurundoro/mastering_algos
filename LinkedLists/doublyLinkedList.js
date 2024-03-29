class Node{
    constructor(value){
        this.value = value
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList{
    constructor(value){
        this.head = {
            value: value,
            next: null,
            prev: null,
        }

        this.tail = this.head
        this.length = 1
    }

    append(value) {
        const newNode = new Node(value)

    newNode.prev = this.tail
    this.tail.next = newNode
    this.tail = newNode
    this.length += 1
    return this
    }

    prepend(value){
        const newNode = new Node(value)

        newNode.next = this.head
        this.head.prev = newNode
        this.head = newNode
        this.length++
        return this
    }

    printList() {
        const array = [];
        let currentNode = this.head;
        while(currentNode !== null){
            array.push(currentNode.value);
            currentNode = currentNode.next
        }
        return array
    }

    insert(index, value){
        if(index >= this.length){
            return this.append(value);
        }

        const newNode = new Node(value)

        const leader = this.traverseToIndex(index-1)
        const follower = leader.next
        leader.next = newNode;
        newNode.prev = leader;
        newNode.next = follower;
        follower.prev = newNode;
        this.length++
        return printList()
    }

    traverseToIndex(index){
        let counter = 0 
        let currentNode = this.head

        while(counter !== 0){
            currentNode = currentNode.next
            counter++
        }
        return currentNode
    }
}

const myLinkedList = new DoublyLinkedList(10)

console.log(myLinkedList.append(5))
console.log(myLinkedList.append(16))
console.log(myLinkedList.prepend(1))
// console.log(myLinkedList.insert(2, 99))
// console.log(myLinkedList.insert(4, 98))
// console.log(myLinkedList.printList())