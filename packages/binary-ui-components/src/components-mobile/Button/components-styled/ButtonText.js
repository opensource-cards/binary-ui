import { LIST_ITEM_HEIGHT, NO_SELECT_CSS } from 'binary-ui-styles';
import styled from 'styled-components';
import {
  CARDS_ICON_DISABLED_CSS,
  FIELD_VALUE_FONT_CSS,
  FIELD_NAME_FONT_CSS,
  LIST_ITEM_CONTENTS_BASE_CSS,
} from '../../../utils/styles';

export default styled.div`
  ${NO_SELECT_CSS}
  ${props => (props.isDisabled ? CARDS_ICON_DISABLED_CSS : `color: ${props.styleColor};`)}
  ${props => (props.isBold ? FIELD_NAME_FONT_CSS : FIELD_VALUE_FONT_CSS)}
  ${LIST_ITEM_CONTENTS_BASE_CSS}
  height: ${LIST_ITEM_HEIGHT}px;
  line-height: ${LIST_ITEM_HEIGHT}px;
  vertical-align: middle;
`;
