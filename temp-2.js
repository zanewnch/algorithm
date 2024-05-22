class TrieNode {
  constructor() {
      this.end = false;
      /* 
      this.children 是一個 JavaScript 物件，用來儲存當前節點的所有子節點。物件的鍵是子節點的字符，值是代表子節點的 TrieNode 實例。
      */
      this.children = {};
  }
}

class Trie {
  constructor() {
      this.root = new TrieNode();
  }

  insert(word) {
      let node = this.root;
      for(let char of word) {
          if(node.children[char] === undefined) {
              node.children[char] = new TrieNode();
          }
          node = node.children[char];
      }
      node.end = true;
  }

  search(word) {
      let node = this.root;
      for(let char of word) {
          if(node.children[char] === undefined) {
              return false;
          }
          node = node.children[char];
      }
      return node.end;
  }

  startsWith(prefix) {
      let node = this.root;
      for(let char of prefix) {
          if(node.children[char] === undefined) {
              return false;
          }
          node = node.children[char];
      }
      return true;
  }
}