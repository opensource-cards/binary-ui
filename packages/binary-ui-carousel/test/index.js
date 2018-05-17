import assert from 'assert';
import { mod } from '../src';

describe('check mod function', () => {
  it('index is undefined if no elements in carousel', () => {
    assert.equal(mod(5, 0), undefined);
  });
  it('index is less than 0', () => {
    assert.equal(mod(-2, 5), 3);
  });
  it('index is bigger than 0', () => {
    assert.equal(mod(3, 5), 3);
  });
  it('index is 0', () => {
    assert.equal(mod(0, 5), 0);
  });
  it('index is number of values', () => {
    assert.equal(mod(5, 5), 0);
  });
});
