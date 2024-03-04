class Queue{
    constructor(){
        this.items = [];
    }

    // 1. enqueue
    // 2. dequeue
    // 3. front

    enqueue(element){
        this.items.push(element);
    }

    dequeue(element){
        return this.items.shift();
    }

    front(){
        return this.items[0];
    }
}