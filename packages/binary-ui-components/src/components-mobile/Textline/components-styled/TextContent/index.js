import styled from 'styled-components';
import { LIST_ITEM_HEIGHT } from 'binary-ui-styles';
import {
  FONT_DISABLED_CSS,
  FIELD_NAME_FONT_CSS,
  FIELD_VALUE_FONT_CSS,
  LIST_ITEM_CONTENTS_BASE_CSS,
} from '../../../../utils/styles';

export default styled.div`
  ${LIST_ITEM_CONTENTS_BASE_CSS}
  ${props => (props.isDisabled ? FONT_DISABLED_CSS : undefined)}
  ${props => (props.isBold ? FIELD_NAME_FONT_CSS : FIELD_VALUE_FONT_CSS)}
  height: ${LIST_ITEM_HEIGHT}px;
  line-height: ${LIST_ITEM_HEIGHT}px;
`;
