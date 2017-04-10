import TextFieldTypes from '../constants/text-field-component-types';

export function getTypeHtml(type) {
  switch (type) {
    case TextFieldTypes.ANY:
    case TextFieldTypes.LINK:
      return 'text';
    case TextFieldTypes.EMAIL:
      return 'email';
    case TextFieldTypes.PASSWORD:
      return 'password';
    case TextFieldTypes.NUMBER:
      return 'number';
    case TextFieldTypes.PHONE_NUMBER:
      return 'tel';
    default:
      return 'text';
  }
}
