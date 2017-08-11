import { BINARY_COLOR_GRAY_60, FONT_FAMILY_MAIN } from 'binary-ui-styles';
import {
  COLOR_BLACK,
  HIGHLIGHT_CSS,
  LIST_ITEM_HALF_HEIGHT,
  TAP_HIGHLIGHT_COLOR,
} from './styles.native-and-web';

export {
  COLOR_BLACK,
  HIGHLIGHT_CSS,
  LIST_ITEM_HALF_HEIGHT,
  TAP_HIGHLIGHT_COLOR,
};

export const ICON_STYLE_OBJ = { paddingRight: 10 };

export const CARDS_ICON_DISABLED_CSS = `
  color: ${BINARY_COLOR_GRAY_60};
  pointer-events: none;
`;

export const FIELD_VALUE_FONT_CSS = `
  font-family: ${FONT_FAMILY_MAIN};
  font-size: 18px;
  font-weight: 200;
`;

export const FIELD_NAME_FONT_CSS = `
  font-family: ${FONT_FAMILY_MAIN};
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 2px;
`;

export const CURSOR_POINTER_CSS = `
  cursor: default;
`;

export const CARDS_INPUT_RESET_CSS = `
  border: 0;
  box-sizing: border-box;
  outline: 0;
  padding: 0;
`;

export const LIST_ITEM_CONTENTS_BASE_CSS = `
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: inline-block;
  outline: 0;
`;
