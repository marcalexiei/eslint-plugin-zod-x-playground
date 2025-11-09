import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import { ESLint, type Linter } from 'eslint';
import path from 'node:path';

const eslint = new ESLint();

describe('each file inside rules must have an error related to that rule', () => {
  function mapMessagesForSnapshot(
    messages: Array<Linter.LintMessage> | undefined,
  ): Array<{ ruleId: string | null; line: number }> {
    if (!Array.isArray(messages)) return [];
    return messages.map((m) => ({ ruleId: m.ruleId, line: m.line }));
  }

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
      mapMessagesForSnapshot(result.at(0)?.messages),
      [
        {
          line: 3,
          ruleId: 'zod-x/no-empty-custom-schema',
        },
        // require-error-message is triggered as side effect
        {
          line: 3,
          ruleId: 'zod-x/require-error-message',
        },
      ],
      'should include no-empty-custom-schema linting error',
    );
  });

  it('no-number-schema-with-int', async () => {
    const result = await eslint.lintFiles([
      path.join(rulesFolderPath, 'no-number-schema-with-int.ts'),
    ]);

    assert.deepStrictEqual(
      mapMessagesForSnapshot(result.at(0)?.messages),
      [
        {
          ruleId: 'zod-x/no-number-schema-with-int',
          line: 3,
        },
        {
          ruleId: 'zod-x/no-number-schema-with-int',
          line: 4,
        },
        {
          ruleId: 'zod-x/no-number-schema-with-int',
          line: 5,
        },
      ],
      'should include no-number-schema-with-int linting error',
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
      mapMessagesForSnapshot(result.at(0)?.messages),
      [
        {
          ruleId: 'zod-x/prefer-meta-last',
          line: 3,
        },
        {
          ruleId: 'zod-x/prefer-meta-last',
          line: 14,
        },
      ],
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
      mapMessagesForSnapshot(result.at(0)?.messages),
      [
        {
          ruleId: 'zod-x/prefer-namespace-import',
          line: 1,
        },
      ],
      'should include prefer-namespace-import linting error',
    );
  });

  it('require-error-message', async () => {
    const result = await eslint.lintFiles([
      path.join(rulesFolderPath, 'require-error-message.ts'),
    ]);

    assert.deepStrictEqual(
      mapMessagesForSnapshot(result.at(0)?.messages),
      [
        {
          ruleId: 'zod-x/require-error-message',
          line: 4,
        },
        {
          ruleId: 'zod-x/require-error-message',
          line: 5,
        },
        {
          ruleId: 'zod-x/require-error-message',
          line: 8,
        },
        {
          ruleId: 'zod-x/require-error-message',
          line: 9,
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
      mapMessagesForSnapshot(result.at(0)?.messages),
      [
        {
          ruleId: 'zod-x/require-schema-suffix',
          line: 3,
        },
      ],
      'should include require-schema-suffix linting error',
    );
  });

  it('schema-error-property-style', async () => {
    const result = await eslint.lintFiles([
      path.join(rulesFolderPath, 'schema-error-property-style.ts'),
    ]);

    assert.deepStrictEqual(
      mapMessagesForSnapshot(result.at(0)?.messages),
      [
        {
          ruleId: 'zod-x/schema-error-property-style',
          line: 4,
        },
      ],
      'should include require-schema-suffix linting error',
    );
  });

  it('require-brand-type-parameter', async () => {
    const result = await eslint.lintFiles([
      path.join(rulesFolderPath, 'require-brand-type-parameter.ts'),
    ]);

    assert.deepStrictEqual(
      mapMessagesForSnapshot(result.at(0)?.messages),
      [
        {
          ruleId: 'zod-x/require-brand-type-parameter',
          line: 3,
        },
        {
          ruleId: 'zod-x/require-brand-type-parameter',
          line: 4,
        },
      ],
      'should include require-schema-suffix linting error',
    );
  });
});
