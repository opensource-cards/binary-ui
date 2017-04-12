import TEXT_FIELD_TYPES from '../constants/text-field-component-types';

export function getTypeHtml(type) {
  switch (type) {
    case TEXT_FIELD_TYPES.ANY:
    case TEXT_FIELD_TYPES.LINK:
      return 'text';
    case TEXT_FIELD_TYPES.EMAIL:
      return 'email';
    case TEXT_FIELD_TYPES.PASSWORD:
      return 'password';
    case TEXT_FIELD_TYPES.NUMBER:
      return 'number';
    case TEXT_FIELD_TYPES.PHONE_NUMBER:
      return 'tel';
    default:
      return 'text';
  }
}
