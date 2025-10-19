import { suite, it } from 'node:test';
import assert from 'node:assert/strict';

import { ESLint } from 'eslint';
import path from 'node:path';

const eslint = new ESLint();

suite('each file inside rules must have an error related to that rule', () => {
  const rulesFolderPath = path.join('.', 'src', 'rules');

  it('array-style', async () => {
    const result = await eslint.lintFiles([
      path.join(rulesFolderPath, 'array-style.ts'),
    ]);

    assert.deepStrictEqual(
      result[0]?.messages.map((m) => m.ruleId),
      ['zod-x/array-style'],
      'should include array-style linting error',
    );
  });

  it('no-any', async () => {
    const result = await eslint.lintFiles([
      path.join(rulesFolderPath, 'no-any.ts'),
    ]);

    assert.deepStrictEqual(
      result[0]?.messages.map((m) => m.ruleId),
      ['zod-x/no-any'],
      'should include no-any linting error',
    );
  });

  it('no-empty-custom-schema', async () => {
    const result = await eslint.lintFiles([
      path.join(rulesFolderPath, 'no-empty-custom-schema.ts'),
    ]);

    assert.deepStrictEqual(
      result[0]?.messages.map((m) => m.ruleId),
      [
        'zod-x/no-empty-custom-schema',
        // require-error-message is triggered as side effect
        'zod-x/require-error-message',
      ],
      'should include no-empty-custom-schema linting error',
    );
  });

  it('no-optional-and-default-together', async () => {
    const result = await eslint.lintFiles([
      path.join(rulesFolderPath, 'no-optional-and-default-together.ts'),
    ]);

    assert.deepStrictEqual(
      result[0]?.messages.map((m) => m.ruleId),
      ['zod-x/no-optional-and-default-together'],
      'should include no-optional-and-default-together linting error',
    );
  });

  it('no-throw-in-refine', async () => {
    const result = await eslint.lintFiles([
      path.join(rulesFolderPath, 'no-throw-in-refine.ts'),
    ]);

    assert.deepStrictEqual(
      result[0]?.messages.map((m) => m.ruleId),
      ['zod-x/no-throw-in-refine'],
      'should include no-throw-in-refine linting error',
    );
  });

  it('prefer-meta-last', async () => {
    const result = await eslint.lintFiles([
      path.join(rulesFolderPath, 'prefer-meta-last.ts'),
    ]);

    assert.deepStrictEqual(
      result[0]?.messages.map((m) => m.ruleId),
      ['zod-x/prefer-meta-last'],
      'should include prefer-meta-last linting error',
    );
  });

  it('prefer-meta', async () => {
    const result = await eslint.lintFiles([
      path.join(rulesFolderPath, 'prefer-meta.ts'),
    ]);

    assert.deepStrictEqual(
      result[0]?.messages.map((m) => m.ruleId),
      ['zod-x/prefer-meta'],
      'should include prefer-meta linting error',
    );
  });

  it('prefer-namespace-import', async () => {
    const result = await eslint.lintFiles([
      path.join(rulesFolderPath, 'prefer-namespace-import.ts'),
    ]);

    assert.deepStrictEqual(
      result[0]?.messages.map((m) => m.ruleId),
      ['zod-x/prefer-namespace-import'],
      'should include prefer-namespace-import linting error',
    );
  });

  it('require-error-message', async () => {
    const result = await eslint.lintFiles([
      path.join(rulesFolderPath, 'require-error-message.ts'),
    ]);

    assert.deepStrictEqual(
      result[0]?.messages.map((m) => ({ ruleId: m.ruleId, line: m.line })),
      [
        {
          line: 4,
          ruleId: 'zod-x/require-error-message',
        },
        {
          line: 5,
          ruleId: 'zod-x/require-error-message',
        },
        {
          line: 8,
          ruleId: 'zod-x/require-error-message',
        },
        {
          line: 9,
          ruleId: 'zod-x/require-error-message',
        },
      ],
      'should include require-error-message linting error',
    );
  });

  it('require-schema-suffix', async () => {
    const result = await eslint.lintFiles([
      path.join(rulesFolderPath, 'require-schema-suffix.ts'),
    ]);

    assert.deepStrictEqual(
      result[0]?.messages.map((m) => m.ruleId),
      ['zod-x/require-schema-suffix'],
      'should include require-schema-suffix linting error',
    );
  });
});
