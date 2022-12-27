import { describe, it, expect } from 'vitest'

// Este ejercicio consiste en sumar dos numeros enteros, pero se reciben como strings
// Ejemplo:
// sumarTextos('1', '2') // 3
// sumarTextos('10', '20') // 30
// sumarTextos('132', '18') // 150

// Esta función es correcta, pero la idea es utilizar lo menos posible las api's de JS
// const sumarTextos = (num1: string, num2: string): string => {
//   return String(parseInt(num1) + parseInt(num2))
// }

// Para resolver este ejercicio, de manera más algoritmica, se pueden seguir los siguientes pasos:
// 1. crear un bucle que recorra los dos strings de derecha a izquierda
// 2. sumar los valores de cada string en cada iteración
// 3. guardar el resultado de la suma en una variable
// 4. si el resultado de la suma es mayor a 9, guardar el residuo en una variable temporal
// 5. si el resultado de la suma es menor a 9, guardar el resultado en una variable acumuladora

const sumarTextos = (num1: string, num2: string) => {
  let resultado = ''
  let carry = 0
  let i = num1.length - 1
  let j = num2.length - 1

  while (i >= 0 || j >= 0) {
    const sum = (parseInt(num1[i]) || 0) + (parseInt(num2[j]) || 0) + carry
    carry = sum > 9 ? 1 : 0
    resultado = String(sum % 10) + resultado
    i--
    j--
  }

  if (carry) resultado = String(carry) + resultado

  return resultado
}

describe('sumarTextos', () => {
  it('returns the sum of two numbers', () => {
    expect(sumarTextos('1', '2')).toBe('3')
    expect(sumarTextos('9', '1')).toBe('10')
    expect(sumarTextos('10', '20')).toBe('30')
    expect(sumarTextos('132', '18')).toBe('150')
  })
})
