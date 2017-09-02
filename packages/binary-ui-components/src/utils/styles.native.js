import { FONT_FAMILY_MAIN } from 'binary-ui-styles';
import { OPACITY_ACTIVE } from './styles-api';

export { LIST_ITEM_HALF_HEIGHT } from './styles.native-and-web';

export const FONT_DISABLED_CSS = `
  opacity: ${OPACITY_ACTIVE};
`;

export const FIELD_VALUE_FONT_CSS = `
  font-family: ${FONT_FAMILY_MAIN};
  font-size: 18;
  font-weight: 200;
`;

export const FIELD_NAME_FONT_CSS = `
  font-family: ${FONT_FAMILY_MAIN};
  font-size: 13;
  font-weight: 700;
  letter-spacing: 2;
`;
