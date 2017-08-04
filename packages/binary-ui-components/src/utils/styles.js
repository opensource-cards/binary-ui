import { BINARY_COLOR_BLUE_60, FONT_FAMILY_MAIN, NO_SELECT_CSS } from 'binary-ui-styles';
import {
  CARDS_BUTTON_CSS as CARDS_BUTTON_CSS_UNIVERSAL,
} from './styles.universal';

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

export const CARDS_ICON_CSS = `
  ${NO_SELECT_CSS}
  color: black;
`;

export const CARDS_BUTTON_CSS = `
  ${NO_SELECT_CSS}
  ${CARDS_BUTTON_CSS_UNIVERSAL};
`;
