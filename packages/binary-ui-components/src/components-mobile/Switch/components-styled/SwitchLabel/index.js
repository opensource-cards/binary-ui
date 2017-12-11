import { FONT_SET_BOLD_CSS, LIST_ITEM_HEIGHT, NO_SELECT_CSS } from 'binary-ui-styles';
import styled from 'styled-components';

export default styled.div`
  ${NO_SELECT_CSS}
  ${FONT_SET_BOLD_CSS}
  display: inline-block;
  height: ${LIST_ITEM_HEIGHT}px;
  line-height: ${LIST_ITEM_HEIGHT}px;
  outline: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  vertical-align: middle;
  white-space: nowrap;
  width: calc(100% - ${LIST_ITEM_HEIGHT})%;
`;
