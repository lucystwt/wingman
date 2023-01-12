import { hasOwnProperty, isObject } from '../src/object'

describe('test object', () => {
  test('test isObject', () => {
    expect(isObject({})).toBe(true)
    expect(isObject({ a: 0, b: true, c: 'str' })).toBe(true)
    expect(isObject(1)).toBe(false)
    expect(isObject(true)).toBe(false)
    expect(isObject([])).toBe(false)
    expect(
      isObject(() => {
        /* */
      })
    ).toBe(false)
  })

  test('test hasOwnProperty', () => {
    const testObj = { a: 1, b: true }
    expect(hasOwnProperty(testObj, 'a')).toBe(true)
    expect(hasOwnProperty(testObj, 'c')).toBe(false)
  })
})
