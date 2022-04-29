export class Trie {
  // 初始化构建，宣告 Trie 时候调用
  constructor() {
    this._root = this._createNode()
  }

  _createNode() {
    return {
      children: {}, // char -> node
      value: null
    }
  }

  set(key, value) {
    if (key === '') {
      throw new Error('key is empty')
    }
    let node = this._root
    // 将 emoticon 的 key 的每一个字符存成 children
    for (let char of key) {
      let nextNode = node.children[char]
      if (nextNode === undefined) {
        nextNode = node.children[char] = this._createNode()
      }
      node = nextNode
    }
    node.value = value
  }

  get(key) {
    let node = this._root
    for (let char of key) {
      let nextNode = node.children[char]
      if (nextNode === undefined) {
        return null
      }
      node = nextNode
    }
    return node.value
  }

  has(key) {
    return this.get(key) !== null
  }

  // TODO: 表情包匹配机制 —— greedy match
  // 用单个字符不断寻找下一个字符，感觉会将【2333, 和 33 认定为是一个表情】
  // 如果一个子串，中间的字符都存在于表情包设定中，显示的表情会由该子串最后一个【字符】决定
  greedyMatch(str) {
    let node = this._root
    for (let char of str) {
      let nextNode = node.children[char]
      if (nextNode === undefined) {
        return null
      }
      if (nextNode.value !== null) {
        return nextNode.value
      }
      node = nextNode
    }
    return null
  }
}
