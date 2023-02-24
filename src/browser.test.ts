import { expect } from "vitest";
import { test } from "vitest";

import { getUrlParams } from "./browser";

test("getUrlParams", () => {
  expect(getUrlParams("foo=Foo&bar=Bar")).toHaveProperty("bar", "Bar");
  expect(getUrlParams("foo=Foo&foo=Fuzz&bar=Bar")).toHaveProperty("foo", [
    "Foo",
    "Fuzz",
  ]);
});
