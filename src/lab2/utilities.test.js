import {textUtil} from './utilities'

test('the best flavor is not xxxxx', () => {
  const actual = textUtil
  console.log(actual)
  expect(actual).not.toBe('xxxxx');
});