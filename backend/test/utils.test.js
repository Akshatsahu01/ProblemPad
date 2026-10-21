import test from 'node:test';
import assert from 'node:assert/strict';
import { normalizeOutput, judgeStatus } from '../src/utils.js';

test('normalizes line endings and trailing whitespace', () => {
  assert.equal(normalizeOutput('alpha  \r\nbeta\t\n\n'), 'alpha\nbeta');
});

test('keeps meaningful internal whitespace differences', () => {
  assert.notEqual(normalizeOutput('two words'), normalizeOutput('two  words'));
});

test('calculates submission status from provider result types', () => {
  assert.equal(judgeStatus([{ passed: true }, { passed: true }]), 'Accepted');
  assert.equal(judgeStatus([{ passed: false, compileError: true }]), 'Compile Error');
  assert.equal(judgeStatus([{ passed: false, runtimeError: true }]), 'Runtime Error');
  assert.equal(judgeStatus([{ passed: false }]), 'Wrong Answer');
});
