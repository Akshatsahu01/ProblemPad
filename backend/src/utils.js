export function normalizeOutput(value) {
  return String(value ?? '')
    .replace(/\r\n?/g, '\n')
    .split('\n')
    .map((line) => line.replace(/[\t ]+$/g, ''))
    .join('\n')
    .replace(/\n+$/g, '');
}

export function judgeStatus(results) {
  if (results.length && results.every((result) => result.passed)) return 'Accepted';
  if (results.some((result) => result.compileError)) return 'Compile Error';
  if (results.some((result) => result.runtimeError)) return 'Runtime Error';
  return 'Wrong Answer';
}
