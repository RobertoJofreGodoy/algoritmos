// lineal searhc algorithm
const list = ['z', 'm', 'a', 'h', 'k', 'b', ]

// La busqueda lineal es un algoritmo de busqueda que recorre un arreglo y devuelve el índice del elemento si es que lo encuentra 
const linealSearch = (list: string[], item: string): number => {
  for (let i = 0; i < list.length; i++) {
    if (list[i] === item) {
      return i
    }
  }
  return -1
}

console.log(linealSearch(list, 'a')) // 2
console.log(linealSearch(list, 'k')) // 4
console.log(linealSearch(list, 'z')) // 0
console.log(linealSearch(list, 'x')) // -1