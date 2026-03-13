import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import { ESLint, Linter } from 'eslint';
import path from 'node:path';

const eslint = new ESLint();

describe('named-z - each file inside rules must have an error related to that rule', () => {
  interface MessageForSnapshot {
    ruleId: string | null;
    line: number;
  }
  function mapMessagesForSnapshot(
    messages: Array<Linter.LintMessage> | undefined,
  ): Array<{ ruleId: string | null; line: number }> {
    if (!Array.isArray(messages)) return [];
    return messages.map((m) => ({ ruleId: m.ruleId, line: m.line }));
  }

  const rulesFolderPath = import.meta.dirname;

  it('no-any-schema', async () => {
    const result = await eslint.lintFiles([
      path.join(rulesFolderPath, 'no-any-schema.ts'),
    ]);

    assert.deepStrictEqual(
      result[0]?.messages.map((m) => m.ruleId),
      ['zod/no-any-schema'],
      'should include no-any linting error',
    );
  });

  it('consistent-import', async () => {
    const result = await eslint.lintFiles([
      path.join(rulesFolderPath, 'consistent-import.ts'),
    ]);

    assert.deepStrictEqual<Array<MessageForSnapshot>>(
      mapMessagesForSnapshot(result.at(0)?.messages),
      [
        {
          ruleId: 'zod/consistent-import',
          line: 1,
        },
        {
          line: 2,
          ruleId: 'zod/consistent-import',
        },
      ],
      'should include prefer-namespace-import linting error',
    );
  });
});
