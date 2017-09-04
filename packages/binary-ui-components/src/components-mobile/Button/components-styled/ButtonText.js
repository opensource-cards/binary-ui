import { LIST_ITEM_HEIGHT, NO_SELECT_CSS } from 'binary-ui-styles';
import styled from 'styled-components';
import {
  FONT_DISABLED_CSS,
  FIELD_VALUE_FONT_CSS,
  FIELD_NAME_FONT_CSS,
  LIST_ITEM_CONTENTS_BASE_CSS,
} from '../../../utils/styles';

export default styled.div`
  ${NO_SELECT_CSS}
  color: ${props => props.styleColor};
  ${props => (props.isDisabled ? FONT_DISABLED_CSS : undefined)}
  ${props => (props.isBold ? FIELD_NAME_FONT_CSS : FIELD_VALUE_FONT_CSS)}
  ${LIST_ITEM_CONTENTS_BASE_CSS}
  height: ${LIST_ITEM_HEIGHT}px;
  line-height: ${LIST_ITEM_HEIGHT}px;
  vertical-align: middle;
`;
