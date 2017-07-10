import { INPUT_FIELD_TYPES } from 'binary-ui-components/mobile/Input';
import { isEmailLike, isUrlLike } from 'pure-validation';

/* eslint-disable import/prefer-default-export */
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
    console.warn('Not implemented.');
    return true;
  }
  if (textFieldType === INPUT_FIELD_TYPES.LINK) {
    return isUrlLike(value);
  }
  return true;
}
/* eslint-enable import/prefer-default-export */
