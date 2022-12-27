// Esta es la colución más simple, solo utiliza métodos de array
// const reverseText = (text: string) => {
//   return text.split('').reverse().join('')
// }

// Esta solución es bastante eficiente y utiliza un solo bucle 
// const reverseText = (text: string) => {
//   let result = ''
//   for (let i = text.length - 1; i >= 0; i--) {
//     result += text[i]
//   }
//   return result
// }

// Pero todavía se puede hacer de forma más eficiente
// podemos recorrer la mitad de la lista e ir moviendo los elementos de posición
const reverseText = (text: string): string => {
  const list = text.split('')
  for (let i = 0; i < list.length / 2; i++) {
    const temp = list[i]
    list[i] = list[list.length - 1 - i]
    list[list.length - 1 - i] = temp
  }
  return list.join('')
}

export default reverseText