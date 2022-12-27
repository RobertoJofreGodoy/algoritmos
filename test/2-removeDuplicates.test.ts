import { describe, it, expect } from 'vitest'
import removeDuplicates from '../ejercicios/removeDuplicates'

describe('removeDuplicates', () => {
  it('returns a list without duplicates', () => {
    const list = ['x', 'x', 'x', 'a', 'a', 'z']
    expect(removeDuplicates(list)).toEqual(['x', 'a', 'z'])
  })
  it('returns a list without duplicates', () => {
    const list = ['a', 'x', 'o', 'd', 'a', 'r', 'q', 'z', 'o', 'a', 'x', 'o', 'd', 'a', 'r', 'q', 'z', 'o', 'a', 'x']
    expect(removeDuplicates(list)).toEqual(['a', 'x', 'o', 'd', 'r', 'q', 'z'])
  })

  // generate 5 test more with random letters
  for (let i = 0; i < 5; i++) {
    it(`returns a list without duplicates`, () => {
      const list = [...Array(20)].map(() => String.fromCharCode(Math.floor(Math.random() * 26) + 97))
      expect(removeDuplicates(list)).toEqual([...new Set(list)])
    })
  }
})
