import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import { ESLint } from 'eslint';
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
});
