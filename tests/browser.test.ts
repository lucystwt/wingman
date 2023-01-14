import { getUrlParams } from "../src/browser"

test("getUrlParams", () => {
  expect(getUrlParams("foo=Foo&bar=Bar")).toHaveProperty("bar", "Bar")
  expect(getUrlParams("foo=Foo&foo=Fuzz&bar=Bar")).toHaveProperty("foo", [
    "Foo",
    "Fuzz",
  ])
})
