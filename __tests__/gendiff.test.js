import { fileURLToPath } from 'url';
import fs from 'fs';
import path from 'path';
import { test, expect, beforeEach } from '@jest/globals';
import genDiff from '../src/index.js';

let obj1 = {};
let obj2 = {};

beforeEach(() => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const file1 = fs.readFileSync(path.resolve(__dirname, '..', '__fixtures__', 'file1.json'), 'utf-8');
  const file2 = fs.readFileSync(path.resolve(__dirname, '..', '__fixtures__', 'file2.json'), 'utf-8');
  obj1 = JSON.parse(file1);
  obj2 = JSON.parse(file2);
});

test('primary case', () => {
  const actual = genDiff(obj1, obj2);
  const expected = `{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`;
  expect(actual).toEqual(expected);
});
