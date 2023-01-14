type ValueType =
  | "Object"
  | "Array"
  | "Function"
  | "GeneratorFunction"
  | "AsyncFunction"
  | "Promise"
  | "RegExp"
  | "Date"
  | "Set"
  | "Map"

const toString = Object.prototype.toString

export function isFunction<T>(value: T) {
  return _prototypeof(value, [
    "Function",
    "GeneratorFunction",
    "AsyncFunction",
    "Promise",
  ])
}

export function isAsyncFunction<T>(value: T) {
  return _prototypeof(value, "AsyncFunction")
}

export function isRegExp<T>(value: T) {
  return _prototypeof(value, "RegExp")
}

export function isDate<T>(value: T) {
  return _prototypeof(value, "Date")
}

export function isPromise<T>(value: T) {
  return _prototypeof(value, "Promise")
}

export function isBlank<T>(value: T) {
  if (
    isFalsy(value) ||
    isWhitespaceString(value) ||
    isEmptyArray(value) ||
    isEmptyObject(value) ||
    isInvalidDate(value) ||
    isEmptySet(value) ||
    isEmptyMap(value)
  )
    return true
  return false
}

export function hasOwnProperty<T extends object>(obj: T, key: PropertyKey) {
  return Object.prototype.hasOwnProperty.call(obj, key)
}

function _prototypeof<T>(value: T, type: ValueType | ValueType[]) {
  if (Array.isArray(type)) {
    const types = type.map((t) => `[object ${t}]`)
    return types.includes(toString.call(value))
  }
  return toString.call(value) === `[object ${type}]`
}

function isFalsy<T>(value: T) {
  return !value
}

function isEmptyArray<T>(value: T) {
  return Array.isArray(value) && value.length === 0
}

function isObject<T>(value: T) {
  return _prototypeof(value, "Object")
}

function isEmptyObject<T>(value: T) {
  return isObject(value) && Reflect.ownKeys(value as object).length === 0
}

function isWhitespaceString<T>(value: T) {
  return typeof value === "string" && /^\s*$/.test(value)
}

function isInvalidDate<T>(value: T) {
  return value instanceof Date && Number.isNaN(value.getTime())
}

function isEmptySet<T>(value: T) {
  return value instanceof Set && value.size === 0
}

function isEmptyMap<T>(value: T) {
  return value instanceof Map && value.size === 0
}
