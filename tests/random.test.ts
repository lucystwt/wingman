import { randomHexColor } from '../src/random'

test('randomHex', () => {
  expect(randomHexColor()).toHaveLength(7)
  expect(randomHexColor()[0]).toBe('#')
  expect(randomHexColor()).toMatch(
    /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3}|[a-fA-F0-9]{8}|[a-fA-F0-9]{4})$/
  )
})
