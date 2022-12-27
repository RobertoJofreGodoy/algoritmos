# Algoritmos

## ¿Qué es un algoritmo?

Un algoritmo es una secuencia de pasos que se ejecutan para resolver un problema. Los algoritmos son la base de la programación, y son la forma en que los programadores le dicen a la computadora qué hacer.

## Algoritmos de Búsqueda

En las notas de estructuras de datos hemos visto bastantes algoritmos de búsqueda para las diferentes estructuras.

Se puede ver aquí: [estructuras de datos](https://github.com/RobertoJofreGodoy/estructuras_de_datos)

### Búsqueda lineal o lineal search

Este es uno de los algoritmos más simples que podemos encontrar. Consiste en recorrer un arreglo de elementos desde el principio hasta el final, y verificar si el elemento que estamos buscando se encuentra en el arreglo.

**Este algoritmo tiene una complejidad de O(n)**, es decir, su tiempo de ejecución es proporcional al tamaño del arreglo.

#### Búsqueda lineal en TyeScript o JavaScript

La búsqueda lineal es un algoritmo que recorre un arreglo y **devuelve el índice del elemento** si es que lo encuentra, y en este caso **devuelve -1** si no lo encuentra. Pero también es posible ver que devuelva un null o undefined.

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

### Búsqueda binaria o binary search

Este algoritmo es una mejora de la búsqueda lineal. Consiste en dividir el arreglo en dos partes, y verificar si el elemento que estamos buscando se encuentra en la primera o segunda mitad del arreglo. Luego, se repite el proceso con la mitad del arreglo en la que se encuentra el elemento.

**Este algoritmo tiene una complejidad de O(log n)**, es decir, su tiempo de ejecución es proporcional a la cantidad de veces que se divide el arreglo.

#### búsqueda binaria en TyeScript o JavaScript

Para realizar la búsqueda binaria  **la lista a recorrer tiene que estar ordenada**, además vamos a necesitas las siguientes variables:
    - **list**: arreglo en el que se va a buscar el elemento.
    - **item**: elemento que se está buscando.
    - **low**: índice desde el cual se va a tener en cuenta para la búsqueda. Siempre parte en 0. Que es el primer índice.
    - **high**: índice hasta el cual se va a tener en cuenta para la búsqueda. Siempre parte en el tamaño del arreglo menos 1. Que es el último índice.
    - **mid**: índice que representa la mitad del arreglo. Se calcula con la siguiente formula: `Math.floor((low + high) / 2)`, se debe redondear hacia abajo con `Math.floor` para que el índice sea un entero.
    - **guess**: elemento que se encuentra en el índice **mid**.

Vamos a ver 2 formas de implementar la búsqueda binaria, una forma iterativa y otra recursiva.

##### búsqueda binaria iterativa

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

##### búsqueda binaria recursiva

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

## Algoritmos de Ordenamiento

Son algoritmos que se encargan de reorganizar los elementos que se encuentran en una lista, de forma que los elementos queden ordenados.

### Ordenamiento de burbuja o bubble sort

Este algoritmo consiste en recorrer el arreglo varias veces, y en cada recorrido se compara cada elemento con el siguiente, y si el elemento actual es mayor que el siguiente, se intercambian de lugar. De esta forma, el elemento más grande va a quedar al final del arreglo.

Este algoritmo tiene una **complejidad de O(n^2)**, es decir, su tiempo de ejecución es proporcional al cuadrado del tamaño del arreglo. Por lo que **es un algoritmo muy ineficiente, pero muy fácil de implementar**.

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

#### Ejemplo Paso a Paso explicando el algoritmo

Antes de ver la implementación en código, vamos a ver un ejemplo paso a paso de cómo funciona el algoritmo de ordenamiento rápido. Ya que es un algoritmo un poco más complejo de entender.

Vamos a ordenar el siguiente arreglo: `[5, 8, 3, 2, 1, 4, 7, 6, 9, 10]`

1. Seleccionamos un pivote, que por norma es el primer elemento de la lista, en este caso es el 5.
2. Nuestro objetivo es encontrar un índice que nos permita dividir el arreglo en 2 partes, una con los elementos menores que el pivote y otra con los elementos mayores que el pivote. Para esto, vamos a necesitar 2 punteros.
3. El primero va a ser el siguiente elemento a la derecha del pivote, y el segundo va a ser el último elemento de la lista. En este caso, el primer puntero es el 8 y el segundo es el 10. `[5, 8*, 3, 2, 1, 8, 7, 6, 9, 10** ]` (un * es el primer puntero, y un ** es el segundo puntero)
4. Mientras el primer puntero sea menor o igual que el segundo puntero, vamos a ir moviendo los punteros hacia el centro del arreglo (aquí comparamos los índices, no los valores).
5. Pero además, vamos a ir intercambiando los elementos de la lista que estén en las posiciones de los punteros, si el elemento del primer puntero menor que el pivote, vamos a avanzar la posición del primer puntero, si es mayor que el pivote vamos a dejar el puntero ahí y nos vamos al 2do puntero. En este caso el primer puntero es 8, que si es mayor a 5, por lo que nos vamos al segundo puntero que es el 10.
6. Ahora comparamos el 2do puntero con el pivote, si el elemento del 2do puntero es mayor que el pivote, no hacemos ningún intercambio, solo retrocedemos el 2do puntero. Pero si el elemento del 2do puntero es menor o igual que el pivote, vamos a intercambiar los elementos de las posiciones de los punteros. En este caso no nos encontramos un elemento menor o igual al pivote hasta el elemento con valor 4, por lo tanto vamos a ir retrocediendo el 2do puntero hasta llegar a ese elemento. `[5, 8*, 3, 2, 1, 4**, 7, 6, 9, 10]`, el 2do puntero pasó por 10, 9, 6, 7 y 4.
7. Cuando tenemos que el primer puntero es mayor que el pivote y el segundo puntero es menor o igual que el pivote, intercambiamos los elementos de las posiciones de los punteros y movemos los punteros de posición, aumentamos el primero y retrocedemos el 2do `[5, 4, 3*, 2, 1**, 8, 7, 6, 9, 10]`
8. Ahora el primer puntero es 3, que es menor al pivote (5), por lo que avanzamos la posición hasta llegar a un elemento de mayor valor que el pivote, en este caso el 8. `[5, 4, 3, 2, 1**, 8*, 7, 6, 9, 10]`.
9. Ahora tenemos la situación de que el índice del primer puntero es mayor al índice del 2do puntero, por lo que ya terminamos de recorrer el arreglo. Ahora vamos a intercambiar el elemento del pivote con el elemento de la posición del 2do puntero, en este caso el 1. `[1, 4, 3, 2, *5*, 8, 7, 6, 9, 10]` (el 5 sigue siendo el pivote).
10. Ahora podemos ver como todos los elementos a la izquierda del pivote son menores que el pivote, y todos los elementos a la derecha del pivote son mayores que el pivote.
11. Ahora toca seguir haciendo lo mismo con los arreglos de la izquierda y derecha del pivote de forma recursiva, hasta que todos los elementos estén ordenados.

#### Ordenamiento rápido en TypeScript o JavaScript

Ahora que ya vimos el algoritmo paso a paso, vamos a ver la implementación en código. Para esto vamos a usar TypeScript, pero el código es muy similar al de JavaScript.

```typescript
  const lista = [5, 4, 3, 2, 1, 8, 7, 6, 9, 10]

  const quickSort = (
    list: number[],
    init: number = 0,
    last: number = list.length - 1
  ) => {
    if (init >= last) return list

    const index = partition(list, init, last)
    quickSort(list, init, index - 1)
    quickSort(list, index + 1, last)
    return list
  }

  const partition = (list: number[], init: number, last: number): number => {
    const pivot = list[init]
    let i = init + 1
    let j = last

    while (true) {
      while (i <= j && list[i] < pivot) i++
      while (j >= i && list[j] > pivot) j--
      if (j < i) break
      ;[list[i], list[j]] = [list[j], list[i]]
      i++
      j--
    }
    ;[list[init], list[j]] = [list[j], list[init]]
    return j
  }

  console.log(quickSort(lista))
```

## Algoritmos Dinámicos

Los algoritmos dinámicos son una clase de algoritmos que se caracterizan por resolver problemas de optimización, es decir, encontrar la mejor solución para un problema. Para esto, los algoritmos dinámicos se basan en la técnica de dividir y conquistar, dividiendo el problema en subproblemas más pequeños, y estos se optimizan de forma recursiva, pero además, se guardan los resultados de los subproblemas en una tabla para no tener que volver a calcularlos.
Por lo que podemos decir que son algoritmos de recursión con memorización.

### Problema de fibonacci

#### Solución recursiva

```typescript
  const fibonacci = (n: number): number => {
    if (n <= 1) return n
    return fibonacci(n - 1) + fibonacci(n - 2)
  }

  console.log(fibonacci(2))
  console.log(fibonacci(3))
  console.log(fibonacci(4))
  console.log(fibonacci(5))
```

Esta solución está bien, pero si nos fijamos en cada console.log recalculamos todos los valores, por ejemplo, al ejecutar el último console.log de fibonacci(5), al ser una función recursiva va a calcular el fibonacci(4), fibonacci(3), fibonacci(2)... pero estas llamadas ya las hicimos en los console.log anteriores, por lo que estaríamos calculando los mismos valores varias veces.

Para optimizar esto vamos a usar la técnica de memorización.

#### Solución con memorización

Para solucionar este problema, vamos a crear una tabla donde guardaremos los valores de cada ejecución, y si el valor ya está en la tabla, lo retornamos, y si no, lo calculamos y lo guardamos en la tabla.

```typescript
  const table = {}

  const fibonacci = (n: number) => {
    if (n in table) return table[n]
    if (n < 2) return n
    table[n] = fibonacci(n - 1) + fibonacci(n - 2)
    return table[n]
  }

  console.log(fibonacci(2))
  console.log(fibonacci(3))
  console.log(fibonacci(4))
  console.log(fibonacci(5))
```

Por lo tanto ahora, el ejecutar el último console.log, no va a calcular los valores de fibonacci(4), fibonacci(3), fibonacci(2) porque ya los tiene en la tabla, simplemente accederá a ellos.
