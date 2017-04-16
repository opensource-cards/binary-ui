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

export function getEditStyle(color) {
  return {
    borderBottom: `1 solid ${color}`,
  };
}

export const CARDS_ICON_CSS = `
  color: black;
`;

export const CARDS_BUTTON_CSS = `
  ${CARDS_BUTTON_CSS_UNIVERSAL};
`;
