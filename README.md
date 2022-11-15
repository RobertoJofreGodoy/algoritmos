# Algoritmos

## ¿Qué es un algoritmo?

Un algoritmo es una secuencia de pasos que se ejecutan para resolver un problema. Los algoritmos son la base de la programación, y son la forma en que los programadores le dicen a la computadora qué hacer.


## Algoritmos de Busqueda

En las notas de estructuras de datos hemos visto bastantes algoritmos de busqueda para las diferentes estructuras.

### Busqueda lineal o lineal search

Este es uno de los algoritmos más simples que podemos encontrar. Consiste en recorrer un arreglo de elementos desde el principio hasta el final, y verificar si el elemento que estamos buscando se encuentra en el arreglo.

Este algoritmo tiene una complejidad de O(n), es decir, su tiempo de ejecución es proporcional al tamaño del arreglo.

#### Busqueda lineal en TyeScript o JavaScript

La busqueda lineal es un algoritmo que recorre un arreglo y **devuelve el índice del elemento** si es que lo encuentra, y en este caso **devuelve -1** si no lo encuentra. Pero también es posible ver que devuelva un null o undefined.

```typescript
const list = ['z', 'm', 'a', 'h', 'k', 'b', ]

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
```

Este algoritmo lo vas a utilizar bastante en otros algoritmos que resuelven problemas más complejos.

### Busqueda binaria o binary search

Este algoritmo es una mejora de la busqueda lineal. Consiste en dividir el arreglo en dos partes, y verificar si el elemento que estamos buscando se encuentra en la primera o segunda mitad del arreglo. Luego, se repite el proceso con la mitad del arreglo en la que se encuentra el elemento.

Este algoritmo tiene una complejidad de O(log n), es decir, su tiempo de ejecución es proporcional a la cantidad de veces que se divide el arreglo.

#### Busqueda binaria en TyeScript o JavaScript

Para realizar la busqueda binaria  **la lista a recorrer tiene que estar ordenada**, además vamos a necesitas las siguientes variables:
    - **list**: arreglo en el que se va a buscar el elemento.
    - **item**: elemento que se está buscando.
    - **low**: índice desde el cual se va a tener en cuenta para la busqueda. Siempre parte en 0. Que es el primer índice.
    - **high**: índice hasta el cual se va a tener en cuenta para la busqueda. Siempre parte en el tamaño del arreglo menos 1. Que es el último índice.
    - **mid**: índice que representa la mitad del arreglo. Se calcula con la siguiente formula: `Math.floor((low + high) / 2)`, se debe redondear hacia abajo con `Math.floor` para que el índice sea un entero.
    - **guess**: elemento que se encuentra en el índice **mid**.

Vamos a ver 2 formas de implementar la busqueda binaria, una forma iterativa y otra recursiva.

##### Busqueda binaria iterativa

```typescript
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
```

##### Busqueda binaria recursiva

```typescript
const binarySearchRecursive = (list: string[], item: string, low: number = 0, high: number = list.length -1 ): number => {
  if (low > high) return -1
  
  const mid = Math.floor((low + high) / 2)
  const guess = list[mid]

  if (guess === item) return mid
  if (guess > item) return binarySearchRecursive(list, item, low, mid - 1)
  return binarySearchRecursive(list, item, mid + 1, high)
}
```

## Algortimos de Ordenamiento

Son algoritmos que se encargan de reorganizar los elementos que se encuentran en una lista, de forma que los elementos queden ordenados.

### Ordenamiento de burbuja o bubble sort

Este algoritmo consiste en recorrer el arreglo varias veces, y en cada recorrido se compara cada elemento con el siguiente, y si el elemento actual es mayor que el siguiente, se intercambian de lugar. De esta forma, el elemento más grande va a quedar al final del arreglo.

Este algoritmo tiene una **complejidad de O(n^2)**, es decir, su tiempo de ejecución es proporcional al cuadrado del tamaño del arreglo. Por lo que es un algoritmo muy ineficiente. Pero es muy fácil de implementar.

Esta función es tan común que la mayoría de los lenguajes de programación la tienen implementada en sus librerías. Por ejemplo, en JavaScript tenemos el método `sort()`.

#### Ordenamiento de burbuja en TypeScript o JavaScript

```typescript
const list = [5, 4, 3, 2, 1, 8, 7, 6, 9, 10]

const bubbleSort = (list: number[]) => {
  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list.length; j++) {
      if (list[j] > list[j + 1]) {
        const temp = list[j]
        list[j] = list[j + 1]
        list[j + 1] = temp
      }
    }
  }
  return list
}
```

### Ordenamiento por mezcla o merge sort

Este algoritmo consiste en dividir el arreglo en 2 partes, y luego ordenar cada una de las partes. Luego, se mezclan las 2 partes ordenadas en un solo arreglo ordenado.

Este algoritmo tiene una **complejidad de O(n log n)**, es decir, su tiempo de ejecución es proporcional a la cantidad de veces que se divide el arreglo. Por lo que es un algoritmo más eficiente que el de ordenamiento de burbuja.

#### Ordenamiento por mezcla en TypeScript o JavaScript

```typescript
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
```

### Ordenamiento rápido o quick sort

Este algoritmo consiste en elegir un elemento del arreglo, llamado **pivote**, y luego reorganizar los elementos del arreglo de forma que todos los elementos menores que el pivote queden a la izquierda del pivote, y todos los elementos mayores que el pivote queden a la derecha del pivote. Luego, se ordenan los elementos de la izquierda y de la derecha del pivote de forma recursiva.

Este algoritmo tiene una **complejidad de O(n log n)**, es decir, su tiempo de ejecución es proporcional a la cantidad de veces que se divide el arreglo. Por lo que es un algoritmo más eficiente que el de ordenamiento de burbuja.

Además este algoritmo también **es más eficiente en promedio que el de ordenamiento por mezcla**, ya que no necesita crear nuevas listas para guardar los elementos de la izquierda y de la derecha del pivote sino que los va moviendo de lugar en el arreglo original. Pero **en caso de que el arreglo ya se encuentre semi-ordenado, el algoritmo de ordenamiento por mezcla es más eficiente**, y su peor complejidad de tiempo es **O(n^2)**.

