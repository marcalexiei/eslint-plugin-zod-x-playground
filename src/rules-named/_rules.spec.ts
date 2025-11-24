import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import { ESLint, type Linter } from 'eslint';
import path from 'node:path';

const eslint = new ESLint();

describe('named - each file inside rules must have an error related to that rule', () => {
  // function mapMessagesForSnapshot(
  //   messages: Array<Linter.LintMessage> | undefined,
  // ): Array<{ ruleId: string | null; line: number }> {
  //   if (!Array.isArray(messages)) return [];
  //   return messages.map((m) => ({ ruleId: m.ruleId, line: m.line }));
  // }

  const rulesFolderPath = path.join('.', 'src', 'rules-named');

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
});
