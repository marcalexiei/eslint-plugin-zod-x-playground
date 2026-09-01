import assert from 'node:assert/strict';
import path from 'node:path';
import { describe, it } from 'node:test';

import { ESLint } from 'eslint';

import { mapEslintMessagesForSnapshot, runOxlint } from '../test-utils.ts';

const eslint = new ESLint();

describe('namespace - each file inside rules must have an error related to that rule', () => {
  const rulesFolderPath = import.meta.dirname;

  describe('array-style (function)', () => {
    const filePath = path.join(rulesFolderPath, 'array-style-function.ts');

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

  describe('array-style (method)', async () => {
    const filePath = path.join(rulesFolderPath, 'array-style-method.ts');

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

  it('consistent-import-source', () => {
    const filePath = path.join(rulesFolderPath, 'consistent-import-source.ts');

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

  it('consistent-import', () => {
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

  describe('consistent-object-schema-type', () => {
    const filePath = path.join(rulesFolderPath, 'consistent-object-schema-type.ts');

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

  describe('no-any-schema', async () => {
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

  describe('no-conflicting-checks', () => {
    const filePath = path.join(rulesFolderPath, 'no-conflicting-checks.ts');

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

  describe('no-duplicate-schema-methods', () => {
    const filePath = path.join(rulesFolderPath, 'no-duplicate-schema-methods.ts');

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

  it('no-empty-custom-schema', () => {
    const filePath = path.join(rulesFolderPath, 'no-empty-custom-schema.ts');

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

  it('no-number-schema-with-int', async () => {
    const filePath = path.join(rulesFolderPath, 'no-number-schema-with-int.ts');

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

  it('no-optional-and-default-together', async () => {
    const filePath = path.join(rulesFolderPath, 'no-optional-and-default-together.ts');

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

  it('no-string-schema-with-uuid', async () => {
    const filePath = path.join(rulesFolderPath, 'no-string-schema-with-uuid.ts');

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

  it('no-throw-in-refine', async () => {
    const filePath = path.join(rulesFolderPath, 'no-throw-in-refine.ts');

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

  describe('no-unknown-schema', async () => {
    const filePath = path.join(rulesFolderPath, 'no-unknown-schema.ts');

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

  describe('no-unnecessary-readonly', async () => {
    const filePath = path.join(rulesFolderPath, 'no-unnecessary-readonly.ts');

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

  describe('prefer-enum-over-literal-union', () => {
    const filePath = path.join(rulesFolderPath, 'prefer-enum-over-literal-union.ts');

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

  describe('prefer-meta-last', () => {
    const filePath = path.join(rulesFolderPath, 'prefer-meta-last.ts');

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

  describe('prefer-meta', async () => {
    const filePath = path.join(rulesFolderPath, 'prefer-meta.ts');

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

  describe('prefer-nullish', async () => {
    const filePath = path.join(rulesFolderPath, 'prefer-nullish.ts');

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

  describe('require-error-message', () => {
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

  it('consistent-schema-var-name', async () => {
    const filePath = path.join(rulesFolderPath, 'consistent-schema-var-name.ts');

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

  describe('schema-error-property-style', async () => {
    const filePath = path.join(rulesFolderPath, 'schema-error-property-style.ts');

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

  describe('prefer-string-schema-with-trim', async () => {
    const filePath = path.join(rulesFolderPath, 'prefer-string-schema-with-trim.ts');

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

  describe('prefer-trim-before-string-length-checks', async () => {
    const filePath = path.join(rulesFolderPath, 'prefer-trim-before-string-length-checks.ts');

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

  describe('prefer-string-length-over-min-max', async () => {
    const filePath = path.join(rulesFolderPath, 'prefer-string-length-over-min-max.ts');

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

  describe('prefer-map-set-size-over-min-max', async () => {
    const filePath = path.join(rulesFolderPath, 'prefer-map-set-size-over-min-max.ts');

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

  describe('prefer-tuple-over-array-length', async () => {
    const filePath = path.join(rulesFolderPath, 'prefer-tuple-over-array-length.ts');

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

  describe('require-brand-type-parameter', async () => {
    const filePath = path.join(rulesFolderPath, 'require-brand-type-parameter.ts');

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
