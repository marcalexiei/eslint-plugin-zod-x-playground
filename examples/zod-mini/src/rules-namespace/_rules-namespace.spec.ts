import assert from 'node:assert/strict';
import path from 'node:path';
import { describe, it } from 'node:test';

import { ESLint } from 'eslint';

import { mapEslintMessagesForSnapshot, runOxlint } from '../test-utils.ts';

const eslint = new ESLint();

const RULES = [
  'consistent-import',
  'consistent-import-source',
  'consistent-object-schema-type',
  'consistent-schema-output-type-style',
  'consistent-schema-var-name',
  'no-any-schema',
  'no-conflicting-checks',
  'no-duplicate-schema-methods',
  'no-empty-custom-schema',
  'no-native-enum',
  'no-promise-schema',
  'no-throw-in-refine',
  'no-transform-in-record-key',
  'no-unknown-schema',
  'no-unnecessary-readonly',
  'prefer-enum-over-literal-union',
  'prefer-map-set-size-over-min-max',
  'prefer-meta',
  'prefer-nullish',
  'prefer-string-length-over-min-max',
  'prefer-tuple-over-array-length',
  'require-brand-type-parameter',
  'require-error-message',
  'schema-error-property-style',
];

describe('zod mini - each file inside rules must have an error related to that rule', () => {
  const rulesFolderPath = import.meta.dirname;

  for (const rule of RULES) {
    describe(rule, () => {
      const filePath = path.join(rulesFolderPath, `${rule}.ts`);

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
  }
});
