class Stack{
    constructor(){
        this.items = [];
    }
    // 1. push
    // 2. pop
    // 3. peek

    push(element){
        this.items.push(element);
    }
    pop(){
        return this.items.pop();
    }
    peek(){
        return this.items[this.items.length-1];
    }
}