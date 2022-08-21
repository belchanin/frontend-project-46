import { test, expect } from '@jest/globals';
import genDiff from '../src/index.js';

const expected = `{
    common: {
      + follow: false
        setting1: Value 1
      - setting2: 200
      - setting3: true
      + setting3: null
      + setting4: blah blah
      + setting5: {
            key5: value5
        }
        setting6: {
            doge: {
              - wow: 
              + wow: so much
            }
            key: value
          + ops: vops
        }
    }
    group1: {
      - baz: bas
      + baz: bars
        foo: bar
      - nest: {
            key: value
        }
      + nest: str
    }
  - group2: {
        abc: 12345
        deep: {
            id: 45
        }
    }
  + group3: {
        deep: {
            id: {
                number: 45
            }
        }
        fee: 100500
    }
}`;

test('json files', () => {
  const actual = genDiff('__fixtures__/nested1.json', '__fixtures__/nested2.json');

  expect(actual).toEqual(expected);
});

test('yaml files', () => {
  const actual = genDiff('__fixtures__/nested1.yml', '__fixtures__/nested2.yaml');

  expect(actual).toEqual(expected);
});
