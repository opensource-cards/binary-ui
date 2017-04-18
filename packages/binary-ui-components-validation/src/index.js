/* eslint-disable */
import { INPUT_FIELD_TYPES } from 'binary-ui-components/mobile/Input';
import { isEmailLike, isPhoneLike } from 'pure-validation';

export function isTextFieldValid(textFieldType, value) {
  if (textFieldType === INPUT_FIELD_TYPES.TEXT) {
    return true;
  }
  if (textFieldType === INPUT_FIELD_TYPES.NUMBER) {
    console.warn('Not implemented.');
    return true;
  }
  if (textFieldType === INPUT_FIELD_TYPES.PASSWORD) {
    return true;
  }
  if (textFieldType === INPUT_FIELD_TYPES.EMAIL) {
    return isEmailLike(value);
  }
  if (textFieldType === INPUT_FIELD_TYPES.TEL) {
    return isPhoneLike(value);
  }
  if (textFieldType === INPUT_FIELD_TYPES.LINK) {
    console.warn('Not implemented.');
    return true;
  }
  return true;
}
/* eslint-enable */
