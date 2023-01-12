import {
  hasOwnProperty,
  isArray,
  isBoolean,
  isEmpty,
  isFunction,
  isNumber,
  isObject,
  isString,
} from '../src/judges'

type ValueType =
  | 'number'
  | 'NaN'
  | 'boolean'
  | 'string'
  | 'object'
  | 'array'
  | 'function'
  | 'null'
  | 'undefined'

const valueTypeData: Record<ValueType, unknown> = {
  number: 1,
  boolean: false,
  string: '1',
  object: { name: 'zs', age: 23 },
  array: [1],
  function: () => 0,
  null: null,
  undefined: undefined,
  NaN: NaN,
}

function mockJudgesTest(func: (obj: unknown) => boolean, hitList: ValueType[]) {
  Object.keys(valueTypeData).forEach((key) => {
    const _key = key as keyof typeof valueTypeData
    const dataValue = valueTypeData[_key]
    const expected = hitList.includes(_key)
    expect(func(dataValue)).toBe(expected)
  })
}

test('isNumber', () => {
  mockJudgesTest(isNumber, ['number', 'NaN'])
})
test('isBoolean', () => {
  mockJudgesTest(isBoolean, ['boolean'])
})
test('isString', () => {
  mockJudgesTest(isString, ['string'])
})
test('isObject', () => {
  mockJudgesTest(isObject, ['object'])
})
test('isArray', () => {
  mockJudgesTest(isArray, ['array'])
})
test('isFunction', () => {
  mockJudgesTest(isFunction, ['function'])
})
test('isEmpty', () => {
  mockJudgesTest(isEmpty, ['null', 'undefined'])
})
test('hasOwnProperty', () => {
  expect(hasOwnProperty(valueTypeData.object, 'name')).toBe(true)
  expect(hasOwnProperty(valueTypeData.object, 'gender')).toBe(false)
})
