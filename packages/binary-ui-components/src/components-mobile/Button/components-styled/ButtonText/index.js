import {
  FONT_SET_BOLD_CSS,
  FONT_SET_LIGHT_CSS,
  LIST_ITEM_HEIGHT,
  NO_SELECT_CSS,
  OPACITY_ACTIVE,
} from 'binary-ui-styles';
import styled from 'styled-components';

export default styled.div`
  ${NO_SELECT_CSS}
  ${props => (props.isDisabled ? `
    opacity: ${OPACITY_ACTIVE};
    pointer-events: none;
  ` : undefined)}
  ${props => (props.isBold ? FONT_SET_BOLD_CSS : FONT_SET_LIGHT_CSS)}
  color: ${props => props.styleColor};
  display: inline-block;
  height: ${LIST_ITEM_HEIGHT}px;
  line-height: ${LIST_ITEM_HEIGHT}px;
  outline: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  vertical-align: middle;
  white-space: nowrap;
  width: 100%;
`;
