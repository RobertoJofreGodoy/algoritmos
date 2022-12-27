import { describe, it, expect } from 'vitest'
import reverseText from '../ejercicios/reverseText'

describe('reverseText', () => {
  it('returns a reversed text', () => {
    const text = 'hello'
    expect(reverseText(text)).toEqual('olleh')
  })
  it('returns a reversed text', () => {
    const text = 'hello world'
    expect(reverseText(text)).toEqual('dlrow olleh')
  })
})