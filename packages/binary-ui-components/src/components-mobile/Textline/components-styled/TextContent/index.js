import {
  FONT_SET_BOLD_CSS,
  FONT_SET_LIGHT_CSS,
  LIST_ITEM_HEIGHT,
  OPACITY_DISABLED,
} from 'binary-ui-styles';
import styled from 'styled-components';

export default styled.div`
  ${props => (props.isBold ? FONT_SET_BOLD_CSS : FONT_SET_LIGHT_CSS)}
  display: inline-block;
  height: ${LIST_ITEM_HEIGHT}px;
  line-height: ${LIST_ITEM_HEIGHT}px;
  opacity: ${props => (props.isDisabled ? OPACITY_DISABLED : '1')};
  outline: 0;
  overflow: hidden;
  pointer-events: ${props => (props.isDisabled ? 'none' : 'auto')};
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
`;
