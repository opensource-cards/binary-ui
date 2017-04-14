import INPUT_FIELD_TYPES from '../constants/text-field-component-types';

export function getTypeHtml(type) {
  switch (type) {
    case INPUT_FIELD_TYPES.ANY:
    case INPUT_FIELD_TYPES.LINK:
      return 'text';
    case INPUT_FIELD_TYPES.EMAIL:
      return 'email';
    case INPUT_FIELD_TYPES.PASSWORD:
      return 'password';
    case INPUT_FIELD_TYPES.NUMBER:
      return 'number';
    case INPUT_FIELD_TYPES.PHONE_NUMBER:
      return 'tel';
    default:
      return 'text';
  }
}
