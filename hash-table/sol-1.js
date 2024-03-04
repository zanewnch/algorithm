class LinkedListNode {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // 在链表头部插入新节点
  prepend(key, value) {
    const newNode = new LinkedListNode(key, value);
    newNode.next = this.head;
    this.head = newNode;
  }

  // 在链表中查找键对应的值
  find(key) {
    let current = this.head;
    while (current !== null) {
      if (current.key === key) {
        return current.value;
      }
      current = current.next;
    }
    return undefined;
  }
}

class HashTable {
  constructor(size = 32) {
    this.size = size;
    // 我们使用 Array(size) 创建了一个具有指定大小的数组，并使用 fill(null) 将数组填充为 null，然后使用 map 方法将数组中的每个元素映射为一个新的空链表对象，这样我们就创建了一个包含 size 个桶的数组，每个桶都是一个空链表。
    this.buckets = new Array(size).fill(null).map(() => new LinkedList());
  }

  // 计算哈希码
  //在 hash 方法中，我们首先初始化 hash 变量为 0，然后遍历键的每个字符，将字符的 Unicode 值累加到 hash 变量中。最后，我们将累加得到的 hash 值对哈希表的大小取模，并返回结果。
  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.size;
  }

  // 将键值对插入哈希表
  set(key, value) {
    const index = this.hash(key);
    this.buckets[index].prepend(key, value);
  }

  // 根据键查找值
  get(key) {
    const index = this.hash(key);
    return this.buckets[index].find(key);
  }
}
