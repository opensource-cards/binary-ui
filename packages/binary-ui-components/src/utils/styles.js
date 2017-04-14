import { BINARY_COLOR_SAND_90, BINARY_COLOR_BLUE_40, BINARY_COLOR_RED_40 } from 'binary-ui-styles';
import { FONT_FAMILY_MAIN, NO_SELECT_CSS } from 'binary-ui-styles/web';
import {
  CARDS_ICON_ACTIVE_CSS,
  CARDS_ICON_HOVER_CSS,
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
  text-transform: uppercase;
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

export const EDIT_CSS = `
  border-bottom: 1px solid ${BINARY_COLOR_SAND_90};
  box-sizing: border-box;
`;

export function getEditStyle(color) {
  return {
    borderBottom: `1px solid ${color || BINARY_COLOR_SAND_90}`,
  };
}

export const NO_EDIT_CSS = `
  border-bottom: 1px solid white;
  box-sizing: border-box;
`;

export const TYPING_HIGHLIGHT_STYLE = {
  borderBottom: `1px solid ${BINARY_COLOR_BLUE_40}`,
  boxSizing: 'border-box',
};

export const TYPING_HIGHLIGHT_INVALID_STYLE = {
  borderBottom: `1px solid ${BINARY_COLOR_RED_40}`,
  boxSizing: 'border-box',
};

export const CARDS_ICON_CSS = `
  ${NO_SELECT_CSS}
  color: black;
`;

export const CARDS_ICON_ACTIVE_PSEUDO_CSS = `
  &:active {
    ${CARDS_ICON_ACTIVE_CSS}
  }
`;

export const CARDS_ICON_HOVER_PSEUDO_CSS = `
  &:hover {
    ${CARDS_ICON_HOVER_CSS}
  }
`;

export const CARDS_BUTTON_CSS = `
  ${NO_SELECT_CSS}
  ${CARDS_BUTTON_CSS_UNIVERSAL};
`;
