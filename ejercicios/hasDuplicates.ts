// const hasDuplicates = (list: number[]) => {
//   const set = new Set(list)
//   return set.size !== list.length
// }

// La solución anterior es más elegante, pero no es tan eficiente,
// ya que crea un nuevo Set con todos los elementos de la lista,
// independientemente si hay duplicados o no
// por lo que siempre estamos recorriendo la lista completa y siempre está duplicando la memoria

// Recordemos que solo nos interesa saber si hay duplicados o no, por lo que si los 2 primeros elementos están duplicados ya no necesitamos seguir recorriendo la lista, podemos terminar el proces ahí.

// Para eso podemos crear un objeto y recorrer la lista, si el elemento ya está en el objeto, significa que hay un duplicado, por lo que podemos terminar el proceso y devolver true, si no está en el objeto, lo agregamos y seguimos recorriendo la lista.

// En el peor de los casos, recorremos toda la lista y no hay duplicados, por lo que terminamos el proceso y devolvemos false

const hasDuplicates = (list: number[]): boolean => {
  const table = {}
  for (const item of list) {
    if (table[item]) return true
    table[item] = true
  }
  return false
}

export default hasDuplicates