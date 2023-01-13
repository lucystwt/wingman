import {
  hasOwnProperty,
  isAsyncFunction,
  isBlank,
  isDate,
  isFunction,
  isPromise,
  isRegExp,
} from '../src/judges'

const valueTypeData = {
  object: { name: 'zs', age: 23, gender: false },
  function: (a: number, b: number) => a + b,
  asyncFunction: async (a: number, b: number) => a + b,
  promise: Promise.resolve('promise'),
  date: new Date(111123123124124),
  regexp: /^regex$/g,
  null: null,
  undefined: undefined,
  emptyString: '',
  emptyObject: {},
  emptyArray: [],
  emptySet: new Set(),
  emptyMap: new Map(),
}

function mockJudgesTest(
  func: (obj: unknown) => boolean,
  hitList: (keyof typeof valueTypeData)[]
) {
  Object.keys(valueTypeData).forEach((key) => {
    const _key = key as keyof typeof valueTypeData
    const dataValue = valueTypeData[_key]
    const expected = hitList.includes(_key)
    expect(func(dataValue)).toBe(expected)
  })
}

describe('judgment data type', () => {
  test('isFunction', () => {
    mockJudgesTest(isFunction, ['function', 'asyncFunction', 'promise'])
  })
  test('isAsyncFunction', () => {
    mockJudgesTest(isAsyncFunction, ['asyncFunction'])
  })
  test('isDate', () => {
    mockJudgesTest(isDate, ['date'])
  })
  test('isRegexp', () => {
    mockJudgesTest(isRegExp, ['regexp'])
  })
  test('isPromise', () => {
    mockJudgesTest(isPromise, ['promise'])
  })
  test('isBlank', () => {
    mockJudgesTest(isBlank, [
      'null',
      'undefined',
      'emptyString',
      'emptyObject',
      'emptyArray',
      'emptySet',
      'emptyMap',
    ])
  })
})

test('hasOwnProperty', () => {
  expect(hasOwnProperty(valueTypeData.object, 'name')).toBe(true)
  expect(hasOwnProperty(valueTypeData.object, 'six')).toBe(false)
})
