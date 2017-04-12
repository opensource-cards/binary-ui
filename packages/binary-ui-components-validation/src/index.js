/* eslint-disable */
import { TEXT_FIELD_TYPES } from 'binary-ui-components/mobile/TextField';
import { isEmailLike, isPhoneLike } from 'pure-validation';

export function isTextFieldValid(textFieldType, value) {
  if (textFieldType === TEXT_FIELD_TYPES.ANY) {
    return true;
  }
  if (textFieldType === TEXT_FIELD_TYPES.NUMBER) {
    console.warn('Not implemented.');
    return true;
  }
  if (textFieldType === TEXT_FIELD_TYPES.PASSWORD) {
    return true;
  }
  if (textFieldType === TEXT_FIELD_TYPES.EMAIL) {
    return isEmailLike(value);
  }
  if (textFieldType === TEXT_FIELD_TYPES.PHONE_NUMBER) {
    return isPhoneLike(value);
  }
  if (textFieldType === TEXT_FIELD_TYPES.LINK) {
    console.warn('Not implemented.');
    return true;
  }
  return true;
}
/* eslint-enable */
