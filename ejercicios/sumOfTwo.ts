// Este ejercicio consiste en encontrar los indices de los elementos de un array que sumados den el valor especificado.
// Por ejemplo, si tenemos el array [1, 3, 8, 11, 6, 21] y el target es 19, entonces la solución es [2, 3] porque 8 + 11 = 19.
// Si el target es 32, entonces la solución es [3, 5] porque 11 + 21 = 32.

// Esta solución es O(n^2) y no es la mejor solución, pero por lo menos funciona.
// const sumOfTwo = (nums: number[], target: number): number[] => {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j]
//       }
//     }
//   }
//   return []
// }

// Veamos como solucionar este problema con una solución O(n)
// Para resolver este problema de forma más optima tenemos que pensar de otra forma,
// en vez de ir sumando los elementos de la lista hasta encontrar el resultado, podemos
// ir restando el valor del elemento actual al valor del target y si el resultado de la resta 
// se encuentra en nuestro Mapa, entonces tenemos la solución.
// sino agregamos el elemento actual al Mapa.

const sumOfTwo = (nums: number[], target: number): number[] => {
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]
    if (map.has(complement)) {
      return [map.get(complement), i]
    }
    map.set(nums[i], i)
  }
  return []
}