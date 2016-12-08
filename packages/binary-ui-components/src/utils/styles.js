import {
  CARDS_GREY_COLOR,
  CARDS_BLUE_COLOR,
  CARDS_RED_COLOR,
  LIST_ITEM_HEIGHT,
} from 'binary-ui-styles';
import {
  FONT_FAMILY_MAIN,
  NO_SELECT_CSS,
} from 'binary-ui-styles/web';

export const LIST_ITEM_HALF_HEIGHT = LIST_ITEM_HEIGHT / 2;

export const FIELD_VALUE_FONT_STYLE_WEB = `
  font-family: ${FONT_FAMILY_MAIN};
  font-size: 18px;
  font-weight: 200;
`;

export const FIELD_VALUE_FONT_STYLE_NATIVE = `
  /*
  font-family: ${FONT_FAMILY_MAIN};
  */
  font-size: 18;
  font-weight: 200;
`;

export const CURSOR_POINTER_STYLE_EXT = `
  cursor: default;
`;

export const CARDS_INPUT_RESET_STYLE_WEB = `
  border: 0;
  box-sizing: border-box;
  outline: 0;
  padding: 0;
  user-select: all;
`;

export const CARDS_INPUT_RESET_STYLE_NATIVE = `
  /*
  border: 0;
  box-sizing: border-box;
  outline: 0;
  */
  padding: 0;
`;

export const LIST_ITEM_CONTENTS_BASE_STYLE_WEB = `
  ${FIELD_VALUE_FONT_STYLE_WEB}
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: inline-block;
  outline: 0;
`;

export const LIST_ITEM_CONTENTS_BASE_STYLE_NATIVE = `
  ${FIELD_VALUE_FONT_STYLE_NATIVE}
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

export const HIGHTLIGHT_STYLE_EXT = `
  background-color: rgba(0, 0, 0, 0.05);
`;

export const EDIT_STYLE = {
  borderBottomWidth: 1,
  borderBottomColor: CARDS_GREY_COLOR,
};

export const EDIT_STYLE_WEB = `
  border-bottom-color: ${CARDS_GREY_COLOR};
  border-bottom-width: 1px;
  border-bottom-style: solid;
`;

export const EDIT_STYLE_NATIVE = `
  border-bottom-color: ${CARDS_GREY_COLOR};
  border-bottom-width: 1;
  border-style: solid;
`;

export const NO_EDIT_STYLE_WEB = `
  border-bottom-color: white;
  border-bottom-width: 1px;
  border-bottom-style: solid;
`;

export const NO_EDIT_STYLE_NATIVE = `
  border-bottom-color: white;
  border-bottom-width: 1;
  border-style: solid;
`;

export const TYPING_HIGHLIGHT_STYLE = {
  borderBottom: `1px solid ${CARDS_BLUE_COLOR}`,
};

export const TYPING_HIGHLIGHT_INVALID_STYLE = {
  borderBottom: `1px solid ${CARDS_RED_COLOR}`,
};

export const CARDS_ICON_STYLE_EXT = `
  ${NO_SELECT_CSS}
  color: black;
`;

export const CARDS_ICON_STYLE_NATIVE = `
  color: black;
`;

export const CARDS_ICON_STYLE_ACTIVE_EXT_OBJ = {
  opacity: 0.5,
};

export const CARDS_ICON_STYLE_ACTIVE_EXT_EXT = `
  opacity: 0.5;
`;

export const CARDS_ICON_STYLE_ACTIVE_PSEUDO = `
  &:active {
    ${CARDS_ICON_STYLE_ACTIVE_EXT_EXT}
  }
`;

export const CARDS_ICON_STYLE_HOVER_EXT_EXT = `
  color: ${CARDS_BLUE_COLOR};
`;

export const CARDS_ICON_STYLE_HOVER_PSEUDO = `
  &:hover {
    ${CARDS_ICON_STYLE_HOVER_EXT_EXT}
  }
`;

export const CARDS_ICON_STYLE_DISABLED_EXT_EXT = `
  color: #808080;
`;

export const CARDS_BUTTON_STYLE_EXT = `
  ${NO_SELECT_CSS}
  color: ${CARDS_BLUE_COLOR};
`;

export const CARDS_BUTTON_STYLE_NATIVE = `
  color: ${CARDS_BLUE_COLOR};
`;
