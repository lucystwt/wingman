import { expect } from "vitest";
import { test } from "vitest";

import { stripHtml } from "./string";

const htmlTemplate1 = `<div>
  <h4>Title</h4>
  <p>Description</p>
  <form>
    <div>
      <label>Username</label>
      <div>
        <input />
      </div>
    </div>
    <div>
      <label>Password</label>
      <div>
        <input type="password" />
      </div>
    </div>
  </form>
</div>`;

const htmlTemplate2 =
  "<a><mark>mTOR</mark>-regulated mitochondrial metabolism limits mycobacterium-induced cytotoxicity</a >";

const htmlTemplate3 =
  "<mark>mTOR</mark>-regulated mitochondrial metabolism limits mycobacterium-induced cytotoxicity";

test("stripHtml", () => {
  expect(stripHtml(htmlTemplate1)).toMatch("Password");
  expect(stripHtml(htmlTemplate1)).not.toMatch("<");

  expect(stripHtml(htmlTemplate2)).toMatch("regulated mitochondrial metabo");
  expect(stripHtml(htmlTemplate2)).not.toMatch(">");

  expect(stripHtml(htmlTemplate3)).toMatch("mTOR");
  expect(stripHtml(htmlTemplate3)).not.toMatch("<");
});
