type Fn = (...args: any[]) => any

export function curry(fn: Fn, ...args: any[]): Fn {
  return fn.length <= args.length ? fn(...args) : curry.bind(null, fn, ...args);
}
