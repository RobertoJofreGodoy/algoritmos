// binary search algorithm
const list = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

// La busqueda binaria es un algoritmo de busqueda que recorre un arreglo y devuelve el índice del elemento si es que lo encuentra
const binarySearch = (list: string[], item: string): number => {
  let low = 0
  let high = list.length - 1

  while (low <= high) {
    const mid = Math.floor((low + high) / 2)
    const guess = list[mid]

    if (guess === item) return mid
    if (guess > item) return high = mid - 1
    return low = mid + 1
  }

  return -1
}

// Este algoritmo tambien puede ser implementado con recursividad
const binarySearchRecursive = (list: string[], item: string, low: number = 0, high: number = list.length -1 ): number => {
  if (low > high) return -1
  
  const mid = Math.floor((low + high) / 2)
  const guess = list[mid]

  if (guess === item) return mid
  if (guess > item) return binarySearchRecursive(list, item, low, mid - 1)
  return binarySearchRecursive(list, item, mid + 1, high)
}