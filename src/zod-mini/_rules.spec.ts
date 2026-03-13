import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import { ESLint, type Linter } from 'eslint';
import path from 'node:path';

const eslint = new ESLint();

describe('zod mini - each file inside rules must have an error related to that rule', () => {
  interface MessageForSnapshot {
    ruleId: string | null;
    line: number;
  }
  function mapMessagesForSnapshot(
    messages: Array<Linter.LintMessage> | undefined,
  ): Array<MessageForSnapshot> {
    if (!Array.isArray(messages)) return [];
    return messages.map((m) => ({ ruleId: m.ruleId, line: m.line }));
  }

  const rulesFolderPath = import.meta.dirname;

  it('should work', async () => {
    const result = await eslint.lintFiles([
      path.join(rulesFolderPath, 'try.ts'),
    ]);

    assert.deepStrictEqual(
      mapMessagesForSnapshot(result.at(0)?.messages),
      [
        {
          ruleId: 'zod/no-any-schema',
          line: 5,
        },
        {
          line: 7,
          ruleId: 'zod/prefer-meta',
        },
        {
          line: 13,
          ruleId: 'zod/require-brand-type-parameter',
        },
      ],
      'should include linting error',
    );
  });
});
