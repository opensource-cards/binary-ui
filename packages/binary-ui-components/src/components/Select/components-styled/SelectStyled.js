import styled from 'styled-components';
import { CARDS_INPUT_RESET_CSS } from '../../../utils/styles';
import { LIST_ITEM_HEIGHT } from 'binary-ui-styles';
import { FIELD_VALUE_FONT_CSS, FIELD_NAME_FONT_CSS } from '../../../utils/styles';

export default styled.select`
  ${CARDS_INPUT_RESET_CSS}
  ${props => (props.isBold ? FIELD_NAME_FONT_CSS : FIELD_VALUE_FONT_CSS)}
  appearance: none;
  background: transparent;
  height: ${LIST_ITEM_HEIGHT}px;
  line-height: ${LIST_ITEM_HEIGHT}px;
  overflow: hidden;
  padding-right: 35px;
  text-overflow: ellipsis;
  width: 100%;
  white-space: nowrap;
`;
