// merge sort

const list = [5, 4, 3, 2, 1, 8, 7, 6, 9, 10]

const mergeSort = (list: number[]) => {
  if (list.length < 2) return list
  const middle = Math.ceil(list.length / 2) // se calcula el indice del elemento central (redondeado hacia arriba)
  const left = list.splice(0, middle) // removemos la mitad de los los elementos de la lista original y los guardamos en left
  const right = list.splice(-middle) // removemos todos los elementos restantes y los guardamos en rigth, por lo que la lista original queda vacía

  mergeSort(left) // hacemos lo mismo con la lista izquierda hasta que quede con un solo elemento
  mergeSort(right) // hacemos lo mismo con la lista derecha hasta que quede con un solo elemento

  let i = 0 // índice para la lista izquierda
  let j = 0 // índice para la lista derecha
  let k = 0 // índice para la lista original

  // Cómo la lista original está vacía, vamos a ir llenándola con los elementos de las listas izquierda y derecha
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      list[k] = left[i]
      i++
    } else {
      list[k] = right[j]
      j++
    }
    k++
  }

  while (i < left.length) {
    list[k] = left[i]
    i++
    k++
  }

  while (j < right.length) {
    list[k] = right[j]
    j++
    k++
  }

  return list
}

console.log(mergeSort(list))