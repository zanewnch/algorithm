class LNode<T> {
  public value: T;
  public next: LNode<T> | null;
  constructor(value:T,next:LNode<T> | null){
    this.value =value;
    this.next = next;
  }
}

const data: LNode<string> = new LNode<string>("aaa",null);
console.log(data.value);
