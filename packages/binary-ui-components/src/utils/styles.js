import { FONT_FAMILY_MAIN_200, FONT_FAMILY_MAIN_700 } from 'binary-ui-styles';
import { OPACITY_ACTIVE } from './styles-api';

export { LIST_ITEM_HALF_HEIGHT } from './styles.native-and-web';

export const FONT_DISABLED_CSS = `
  opacity: ${OPACITY_ACTIVE};
  pointer-events: none;
`;

export const FIELD_VALUE_FONT_CSS = `
  color: hsl(0, 0%, 0%);
  font-family: ${FONT_FAMILY_MAIN_200};
  font-size: 18px;
`;

export const FIELD_NAME_FONT_CSS = `
  color: hsl(0, 0%, 0%);
  font-family: ${FONT_FAMILY_MAIN_700};
  font-size: 13px;
  letter-spacing: 2px;
`;

export const LIST_ITEM_CONTENTS_BASE_CSS = `
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: inline-block;
  outline: 0;
`;
