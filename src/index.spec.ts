import { describe, it } from "node:test";
import assert from "node:assert/strict";

import { ESLint } from "eslint";

const eslint = new ESLint();

await describe("ESLint", () => {
  // eslint-disable-next-line @typescript-eslint/no-floating-promises
  it("should lint files in ./fixtures/generic without errors", async () => {
    const result = await eslint.lintFiles(["./src/index.ts"]);

    assert.equal(result[0]?.errorCount, 6);
    assert.deepEqual(
      result[0]?.messages.map((m) => m.ruleId),
      [
        "zod-x/prefer-namespace-import",
        "zod-x/array-style",
        "zod-x/no-throw-in-refine",
        "zod-x/no-any",
        "zod-x/prefer-meta",
        "zod-x/prefer-meta-last",
      ]
    );
  });
});
