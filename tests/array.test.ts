import { isArray } from '../src/array'

describe('test array', () => {
  test('test isArray', () => {
    expect(isArray([])).toBe(true)
    expect(isArray([1, 2, 3])).toBe(true)
    expect(isArray(1)).toBe(false)
    expect(isArray(true)).toBe(false)
    expect(isArray({})).toBe(false)
    expect(isArray({ a: 0, b: true, c: 'str' })).toBe(false)
    expect(
      isArray(() => {
        /* */
      })
    ).toBe(false)
  })
})
