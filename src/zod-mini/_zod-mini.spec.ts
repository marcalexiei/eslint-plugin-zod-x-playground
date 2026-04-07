import { describe, it } from 'node:test';
import path from 'node:path';
import assert from 'node:assert/strict';

import { ESLint } from 'eslint';

import { mapEslintMessagesForSnapshot, runOxlint } from '../test-utils.ts';

const eslint = new ESLint();

describe('zod mini - each file inside rules must have an error related to that rule', () => {
  const rulesFolderPath = import.meta.dirname;

  it('should work with eslint', async (t) => {
    const result = await eslint.lintFiles([
      path.join(rulesFolderPath, 'try.ts'),
    ]);

    const messages = mapEslintMessagesForSnapshot(result.at(0)?.messages);
    t.assert.snapshot(messages);
  });

  it('should work with oxlint', async (t) => {
    const { code, diagnostics } = await runOxlint(import.meta.dirname);

    assert.equal(code, 1);
    t.assert.snapshot(diagnostics);
  });
});
