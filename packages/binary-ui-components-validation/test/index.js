import { expect } from 'chai';
import { isTextFieldValid } from '../src';
import { INPUT_FIELD_TYPES } from '../../binary-ui-components/src/components-mobile/Input';

describe('isTextFieldValid', () => {
  describe(`${INPUT_FIELD_TYPES.TEXT}`, () => {
    it('value undefined is correct', () =>
      expect(isTextFieldValid(INPUT_FIELD_TYPES.TEXT)).to.be.true
    );
    it('value empty is correct', () =>
      expect(isTextFieldValid(INPUT_FIELD_TYPES.TEXT, '')).to.be.true
    );
    it('value defined is correct', () =>
      expect(isTextFieldValid(INPUT_FIELD_TYPES.TEXT, 'text')).to.be.true
    );
  });

  describe(`${INPUT_FIELD_TYPES.NUMBER}`, () => {
    it('value undefined is correct', () =>
      expect(isTextFieldValid(INPUT_FIELD_TYPES.NUMBER)).to.be.true
    );
    it('value empty is correct', () =>
      expect(isTextFieldValid(INPUT_FIELD_TYPES.NUMBER, '')).to.be.true
    );
    it('value defined is correct', () =>
      expect(isTextFieldValid(INPUT_FIELD_TYPES.NUMBER, 'text')).to.be.true
    );
  });

  describe(`${INPUT_FIELD_TYPES.PASSWORD}`, () => {
    it('value undefined is correct', () =>
      expect(isTextFieldValid(INPUT_FIELD_TYPES.PASSWORD)).to.be.true
    );
    it('value empty is correct', () =>
      expect(isTextFieldValid(INPUT_FIELD_TYPES.PASSWORD, '')).to.be.true
    );
    it('value defined is correct', () =>
      expect(isTextFieldValid(INPUT_FIELD_TYPES.PASSWORD, 'text')).to.be.true
    );
  });

  describe(`${INPUT_FIELD_TYPES.EMAIL}`, () => {
    it('value undefined is correct', () =>
      expect(isTextFieldValid(INPUT_FIELD_TYPES.EMAIL)).to.be.false
    );
    it('value empty is correct', () =>
      expect(isTextFieldValid(INPUT_FIELD_TYPES.EMAIL, '')).to.be.false
    );
    it('value defined is correct - text', () =>
      expect(isTextFieldValid(INPUT_FIELD_TYPES.EMAIL, 'text')).to.be.false
    );
    it('value defined is correct - email', () =>
      expect(isTextFieldValid(INPUT_FIELD_TYPES.EMAIL, 'email@gmail.com')).to.be.true
    );
  });

  describe(`${INPUT_FIELD_TYPES.TEL}`, () => {
    it('value undefined is correct', () =>
      expect(isTextFieldValid(INPUT_FIELD_TYPES.TEL)).to.be.true
    );
    it('value empty is correct', () =>
      expect(isTextFieldValid(INPUT_FIELD_TYPES.TEL, '')).to.be.true
    );
    it('value defined is correct - text', () =>
      expect(isTextFieldValid(INPUT_FIELD_TYPES.TEL, 'text')).to.be.true
    );
    it('value 777 is correct - number', () =>
      expect(isTextFieldValid(INPUT_FIELD_TYPES.TEL, '777')).to.be.true
    );
    it('value defined is correct - number', () =>
      expect(isTextFieldValid(INPUT_FIELD_TYPES.TEL, '+10123456789')).to.be.true
    );
  });

  describe(`${INPUT_FIELD_TYPES.LINK}`, () => {
    it('value undefined is correct', () =>
      expect(isTextFieldValid(INPUT_FIELD_TYPES.LINK)).to.be.false
    );
    it('value empty is correct', () =>
      expect(isTextFieldValid(INPUT_FIELD_TYPES.LINK, '')).to.be.false
    );
    it('value defined is correct - text', () =>
      expect(isTextFieldValid(INPUT_FIELD_TYPES.LINK, 'text')).to.be.false
    );
    it('value defined is correct - url with text', () =>
      expect(isTextFieldValid(INPUT_FIELD_TYPES.LINK, 'http://github.com foo bar')).to.be.false
    );
    it('value defined is correct - url', () =>
      expect(isTextFieldValid(INPUT_FIELD_TYPES.LINK, 'http://github.com')).to.be.true
    );
  });
});
