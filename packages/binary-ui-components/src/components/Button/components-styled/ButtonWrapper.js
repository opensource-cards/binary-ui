import styled from 'styled-components';
import { LIST_ITEM_HEIGHT } from 'binary-ui-styles';
import { CURSOR_POINTER_CSS } from '../../../utils/styles';
import { HIGHLIGHT_CSS } from '../../../utils/styles.universal';

const LIST_ITEM_IS_TAP_HIGHLIGHT = `
  &:active {
    ${HIGHLIGHT_CSS}
  }
`;

export default styled.div`
  ${CURSOR_POINTER_CSS}
  ${props => (props.isTapHighlight ? LIST_ITEM_IS_TAP_HIGHLIGHT : undefined)}
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: row-reverse;
  height: ${LIST_ITEM_HEIGHT}px;
  padding-left: 10px;
  width: 100%;
`;
