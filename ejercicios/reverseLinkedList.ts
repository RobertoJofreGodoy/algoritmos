// Este ejercicio consiste en revertir una lista enlazada

// Esquema de la lista enlazada
// 1 -> 2 -> 3 -> 4 -> 5 -> null

// Esquema de la lista enlazada invertida
// 5 -> 4 -> 3 -> 2 -> 1 -> null

// clase para crear un nodo
class LinkedListNode {
  value: number
  next: LinkedListNode | null
  constructor(value: number) {
    this.value = value
    this.next = null
  }
}

// clase para crear la lista enlazada y agregar nodos
class LinkedList {
  head: LinkedListNode | null
  length: number
  constructor() {
    this.head = null
    this.length = 0
  }
  add(value: number) {
    const node = new LinkedListNode(value)
    if (this.head === null) {
      this.head = node
    } else {
      let currentNode = this.head
      while (currentNode.next) {
        currentNode = currentNode.next
      }
      currentNode.next = node
    }
    this.length++
    return this
  }

  // Función para invertir la lista original
  // Una LinkedList si o si debe ser recorrida de principio a fin
  // Nuestro punto de entrada la LinkedList es el head, que es el primer nodo
  // teniendo esto en cuenta, estos son los pasos a seguir:
  reverse(head: LinkedListNode | null) {
    // 1. Guardar el nodo actual
    let current = head
    // 2. Guardar el nodo anterior, se inicializa en null porque no hay nodo anterior
    let previous: LinkedListNode | null = null
    // 3. recorrer la lista mientras el nodo actual no sea null
    while (current !== null) {
      // 4. Guardar el siguiente nodo
      const temp = current.next
      // 5. Apuntar el siguiente nodo al nodo anterior
      current.next = previous
      // 6. Guardar el nodo actual como el nodo anterior (para el siguiente ciclo)
      previous = current
      // 6. Avanzar al siguiente nodo, accediendo al nodo guardado en el paso 4
      current = temp
    }
    // 7. Devolver el nodo previous, que es el último nodo de la lista original
    return previous as LinkedListNode
  }
}

export { LinkedList }