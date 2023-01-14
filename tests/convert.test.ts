import { hexToRgb, rgbToHex } from "../src/convert"

test("rgbToHex", () => {
  expect(rgbToHex([80, 11, 79]).toLowerCase()).toBe("#500b4f")
  expect(rgbToHex([26, 124, 136]).toLowerCase()).toBe("#1a7c88")
})

test("hexToRgb", () => {
  expect(hexToRgb("#500b4f").join("")).toBe("801179")
  expect(hexToRgb("#1a7c88").join("")).toBe("26124136")
})
