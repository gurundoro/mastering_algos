// 10 --> 5 --> 16

// let mylinkedList = {
//     head: {
//         value: 10,
//         next: {
//             value: 5,
//             next: {
//                 value: 16,
//                 next: null
//             }
//         }
//     }
// }

class Node {
    constructor(value){
    this.value = value
    this.next = null
    }
}

class LinkedList {
    constructor(value){
        this.head = {
            value:value,
            next: null
        }
        this.tail = this.head;
        this.length = 1
    }

    append(value){
        const newNode = new Node(value)

        this.tail.next = newNode
        this.tail = newNode 
        this.length += 1
        return this 
    }

    prepend(value){
        const newNode = new Node(value)

        newNode.next = this.head;
        this.head = newNode
        this.length += 1
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
        //check parameters
        if(index >= this.length){
            return this.append(value)
        }  
        const newNode = new Node(value)
        
       const leader = this.traverseToIndex(index-1)
       const holdingPointer = leader.next;
       leader.next = newNode
       newNode.next = holdingPointer
       this.length += 1
       return this.printList()
    }

    traverseToIndex(index){
        let counter = 0 
        let currentNode = this.head

        while(counter !== index){
            currentNode = currentNode.next
            counter += 1
        }
        return currentNode
    }

    remove(index){
        
        const leader = this.traverseToIndex(index-1)
        const unwantedNode = leader.next;
        leader.next = unwantedNode.next;
        this.length--
        return this.printList()
    }


    reverse(){
        if(this.length === 1){
            return this.head
        }
        let first = this.head;
        this.tail = this.head
        let second = first.next

        while(second){
            const temp = second.next;
            second.next= first;
            first = second;
            second = temp
        }
        this.head.next = null
        this.head = first
        return this 
    }

        


    
}

const myLinkedList = new LinkedList(10)

console.log(myLinkedList.append(5))
console.log(myLinkedList.append(16))
console.log(myLinkedList.prepend(1))
console.log(myLinkedList.printList())
console.log(myLinkedList.insert(2, 99))
console.log(myLinkedList.insert(4, 98))
console.log(myLinkedList.insert(4, 98))
console.log(myLinkedList.reverse())
console.log(myLinkedList.printList())