import { MAIN_FONT_FAMILY_IOS } from 'binary-ui-styles/native';
export {
  CARDS_INPUT_RESET_CSS,
  CARDS_ICON_CSS,
  CARDS_BUTTON_CSS,
} from './styles.native';

export const FIELD_VALUE_FONT_STYLE_CSS = `
  font-family: ${MAIN_FONT_FAMILY_IOS};
  font-size: 18;
  font-weight: 200;
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
