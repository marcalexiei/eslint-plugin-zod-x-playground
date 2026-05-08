import assert from 'node:assert/strict';
import path from 'node:path';
import { describe, it } from 'node:test';

import { ESLint } from 'eslint';

import { mapEslintMessagesForSnapshot, runOxlint } from '../test-utils.ts';

const eslint = new ESLint();

describe('named-z - each file inside rules must have an error related to that rule', () => {
  const rulesFolderPath = import.meta.dirname;

  describe('no-any-schema', () => {
    const filePath = path.join(rulesFolderPath, 'no-any-schema.ts');

    it('eslint', async (t) => {
      const result = await eslint.lintFiles([filePath]);

      const messages = mapEslintMessagesForSnapshot(result.at(0)?.messages);
      t.assert.snapshot(messages);
    });

    it('oxlint', async (t) => {
      const { code, diagnostics } = await runOxlint(filePath);

      assert.equal(code, 1);
      t.assert.snapshot(diagnostics);
    });
  });

  describe('consistent-import', () => {
    const filePath = path.join(rulesFolderPath, 'consistent-import.ts');

    it('eslint', async (t) => {
      const result = await eslint.lintFiles([filePath]);

      const messages = mapEslintMessagesForSnapshot(result.at(0)?.messages);
      t.assert.snapshot(messages);
    });

    it('oxlint', async (t) => {
      const { code, diagnostics } = await runOxlint(filePath);

      assert.equal(code, 1);
      t.assert.snapshot(diagnostics);
    });
  });
});
