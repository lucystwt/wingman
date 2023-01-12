export function isNumber<T>(obj: T) {
  return typeof obj === 'number'
}

export function isBoolean<T>(obj: T) {
  return typeof obj === 'boolean'
}

export function isString<T>(obj:T) {
  return typeof obj === 'string'
}

export function isObject<T>(obj: T) {
  return Object.prototype.toString.call(obj) === '[object Object]'
}

export function isArray<T>(obj: T) {
  return Array.isArray(obj)
}

export function isFunction<T>(obj: T) {
  return Object.prototype.toString.call(obj) === '[object Function]'
}

export function isEmpty<T>(obj: T) {
  return obj === undefined || obj === null
}

export function hasOwnProperty<T>(obj: T, key: PropertyKey) {
  return Object.prototype.hasOwnProperty.call(obj, key)
}
