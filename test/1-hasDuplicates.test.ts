import { describe, it, expect } from 'vitest'
import hasDuplicates from '../ejercicios/hasDuplicates'

describe('hasDuplicates', () => {
  it('returns true if there are duplicates', () => {
    expect(hasDuplicates([1, 2, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1])).toBe(true)
  })

  it('returns false if there are no duplicates', () => {
    expect(hasDuplicates([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(false)
  })
})
