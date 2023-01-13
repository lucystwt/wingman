export function getUrlParams<T extends Record<string, any>>(query: string): T {
  return Array.from(new URLSearchParams(query)).reduce<T>(
    (p, [k, v]) =>
      Object.assign({}, p, {
        [k]: p[k] ? (Array.isArray(p[k]) ? p[k] : [p[k]]).concat(v) : v,
      }),
    Object.create(null)
  )
}

export function copyToClipboard(text: string) {
  if (navigator && navigator.clipboard && navigator.clipboard.writeText)
    return navigator.clipboard.writeText(text)
  return Promise.reject('The Clipboard API is not support.')
}

export function clearCookies() {
  document.cookie
    .split(';')
    .forEach(
      (c) =>
        (document.cookie = c
          .replace(/^ +/, '')
          .replace(/=.*/, `=;expires=${new Date().toUTCString()};path=/`))
    )
}

export function getSelectedText() {
  return window.getSelection()?.toString()
}

export function isDarkMode() {
  return (
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  )
}

export function gotoTop() {
  window.scrollTo(0, 0)
}

export function isTabActivate() {
  return !document.hidden
}

export function isAtBottom() {
  return (
    document.documentElement.clientHeight + window.scrollY >=
    document.documentElement.scrollHeight
  )
}

export function isIE() {
  return !!(document as any).documentMode
}
