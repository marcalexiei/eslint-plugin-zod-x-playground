import { spawn } from 'node:child_process';

import type { Linter } from 'eslint';

//=============================================================================
// ESLINT
//=============================================================================

interface MessageForSnapshot {
  ruleId: string | null;
  line: number;
  message: string;
}
export function mapEslintMessagesForSnapshot(
  messages: Array<Linter.LintMessage> | undefined,
): Array<MessageForSnapshot> {
  if (!Array.isArray(messages)) return [];
  return messages.map((m) => ({
    ruleId: m.ruleId,
    line: m.line,
    message: m.message,
  }));
}

//=============================================================================
// OXLINT
//=============================================================================

interface RawDiagnostic {
  filename: string;
  message: string;
  code: string;
  severity: string;
  [key: string]: unknown;
}

interface Diagnostic {
  filename: string;
  message: string;
  code: string;
  severity: string;
}

function mapOxcDiagnostics(input: Array<RawDiagnostic>): Array<Diagnostic> {
  return input.map(({ filename, message, code, severity }) => ({
    filename,
    message,
    code,
    severity,
  }));
}

/**
 * File are not returned in a consistent order.
 * Using filename as "id" to sort them out should allow snapshot usage
 */
function normalizeOxlintDiagnostics(input: Array<Diagnostic>): void {
  // oxlint-disable-next-line id-length
  input.sort((x, y) => {
    if (x.filename < y.filename) {
      return -1;
    }
    if (x.filename > y.filename) {
      return 1;
    }
    return 0;
  });
}

export function runOxlint(fixturePath: string): Promise<{
  code: number;
  stdout: string;
  stderr: string;
  diagnostics: Array<Diagnostic>;
}> {
  return new Promise((resolve, reject) => {
    const proc = spawn('pnpm', ['oxlint', '--format=json', fixturePath]);

    let stdout = '';
    let stderr = '';

    proc.stdout.on('data', (data) => (stdout += data));
    proc.stderr.on('data', (data) => (stderr += data));

    proc.on('close', (code) => {
      // console.info(stdout);
      const _diagnostics = JSON.parse(stdout)
        .diagnostics as Array<RawDiagnostic>;
      const diagnostics = mapOxcDiagnostics(_diagnostics);
      normalizeOxlintDiagnostics(diagnostics);

      resolve({ code: code as number, diagnostics, stderr, stdout });
    });

    proc.on('error', reject);
  });
}
