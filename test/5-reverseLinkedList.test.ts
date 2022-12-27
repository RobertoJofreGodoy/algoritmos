import { describe, it, expect } from 'vitest'
import { LinkedList } from '../ejercicios/reverseLinkedList'

// Crear una lista enlazada con los valores 1, 2, 3, 4, 5
let linkedList = new LinkedList()
linkedList.add(1)
linkedList.add(2)
linkedList.add(3)
linkedList.add(4)
linkedList.add(5)

describe('reverseLinkedList', () => {
  linkedList.head = linkedList.reverse(linkedList.head)
  it('should return a reversed linked list', () => {
    expect(linkedList.head?.value).toBe(5)
    expect(linkedList.head?.next?.value).toBe(4)
    expect(linkedList.head?.next?.next?.value).toBe(3)
    expect(linkedList.head?.next?.next?.next?.value).toBe(2)
    expect(linkedList.head?.next?.next?.next?.next?.value).toBe(1)
    expect(linkedList.head?.next?.next?.next?.next?.next).toBeNull()
  })
})
