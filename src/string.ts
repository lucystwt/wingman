export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export function reverse(str: string) {
  return str.split("").reverse().join("")
}

export function truncateString(str: string, len: number) {
  return str.length < len ? str : `${str.slice(0, len - 3)}...`
}

export function stripHtml(html: string) {
  return (
    new DOMParser().parseFromString(html, "text/html").body.textContent || ""
  )
}
