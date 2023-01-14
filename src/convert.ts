type Rgb = [number, number, number]

export function rgbToHex(rgb: Rgb) {
  const r = rgb[0],
    g = rgb[1],
    b = rgb[2]
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
}

export function hexToRgb(hex: string): Rgb {
  return (hex
    .replace(
      /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
      (_, r, g, b) => `#${r}${r}${g}${g}${b}${b}`
    )
    .substring(1)
    .match(/.{2}/g)
    ?.map((x) => parseInt(x, 16)) ?? [0, 0, 0]) as Rgb
}
