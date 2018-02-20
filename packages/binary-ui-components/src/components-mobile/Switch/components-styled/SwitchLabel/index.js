import { FONT_SET_BOLD_CSS, LIST_ITEM_HEIGHT } from 'binary-ui-styles';
import styled from 'styled-components';

export default styled.div`
  ${FONT_SET_BOLD_CSS}
  display: inline-block;
  height: ${LIST_ITEM_HEIGHT}px;
  line-height: ${LIST_ITEM_HEIGHT}px;
  outline: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  user-select: none;
  vertical-align: middle;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-touch-callout: none;
  white-space: nowrap;
  width: calc(100% - ${LIST_ITEM_HEIGHT})%;
`;
