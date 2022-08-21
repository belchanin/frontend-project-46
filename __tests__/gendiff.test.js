import { test, expect } from '@jest/globals';
import genDiff from '../src/index.js';

const expected = `{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`;

test('json files', () => {
  const actual = genDiff('__fixtures__/file1.json', '__fixtures__/file2.json');

  expect(actual).toEqual(expected);
});

test('yaml files', () => {
  const actual = genDiff('__fixtures__/file1.yml', '__fixtures__/file2.yaml');

  expect(actual).toEqual(expected);
});
