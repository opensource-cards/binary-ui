import {
  FONT_SET_BOLD_CSS,
  FONT_SET_LIGHT_CSS,
  INPUT_RESET_CSS,
  LIST_ITEM_HEIGHT,
} from 'binary-ui-styles';
import styled from 'styled-components';

export default styled.select`
  ${INPUT_RESET_CSS}
  ${props => (props.isBold ? FONT_SET_BOLD_CSS : FONT_SET_LIGHT_CSS)}
  appearance: none;
  background: transparent;
  border-radius: 0;
  height: ${LIST_ITEM_HEIGHT}px;
  line-height: ${LIST_ITEM_HEIGHT}px;
  overflow: hidden;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 35px;
  padding-top: 0;
  text-overflow: ellipsis;
  width: 100%;
  white-space: nowrap;
`;
