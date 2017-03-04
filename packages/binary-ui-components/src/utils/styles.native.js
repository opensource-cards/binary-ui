import { CARDS_GREY_COLOR, BINARY_COLOR_BLUE_40, BINARY_COLOR_RED_40 } from 'binary-ui-styles';
import {
  CARDS_BUTTON_CSS as CARDS_BUTTON_CSS_UNIVERSAL,
} from './styles.universal';

// TODO: set correct font-family
export const FIELD_VALUE_FONT_STYLE_CSS = `
  /*
  font-family: TODO;
  */
  font-size: 18;
  font-weight: 200;
`;

export const CARDS_INPUT_RESET_CSS = `
  /*
  border: 0;
  box-sizing: border-box;
  outline: 0;
  */
  padding: 0;
`;

export const LIST_ITEM_CONTENTS_BASE_CSS = `
  ${FIELD_VALUE_FONT_STYLE_CSS}
  margin-left: 10;
  /*
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: inline-block;
  outline: 0;
  */
`;

export const EDIT_CSS = `
  border-bottom: 1 solid ${CARDS_GREY_COLOR};
`;

export function getEditStyle(color) {
  return {
    borderBottom: `1 solid ${color || CARDS_GREY_COLOR}`,
  };
}

export const NO_EDIT_CSS = `
  border-bottom: 1 solid white;
`;

export const TYPING_HIGHLIGHT_STYLE = {
  borderBottom: `1 solid ${BINARY_COLOR_BLUE_40}`,
};

export const TYPING_HIGHLIGHT_INVALID_STYLE = {
  borderBottom: `1 solid ${BINARY_COLOR_RED_40}`,
};

export const CARDS_ICON_CSS = `
  color: black;
`;

export const CARDS_BUTTON_CSS = `
  ${CARDS_BUTTON_CSS_UNIVERSAL};
`;
