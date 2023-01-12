export function isObject<T>(obj: T) {
  return Object.prototype.toString.call(obj) === '[object Object]'
}

export function hasOwnProperty<T>(obj: T, key: PropertyKey) {
  return Object.prototype.hasOwnProperty.call(obj, key)
}
