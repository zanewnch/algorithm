class Stack{
    constructor(){
        this.items = [];
    }

    push(element){
        this.items.push(element);
    }
    // 一堆紙 要拿最上面那張
    // array.pop is build-in method, all programming language has this
    pop(){
        return this.items.pop();
    }
    // retreive the last element
    peek(){
        return this.items[this.items.length-1]
    }
}