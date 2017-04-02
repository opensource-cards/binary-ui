import styled from 'styled-components';
import { NO_EDIT_CSS } from '../../../utils/styles';
import { HIGHLIGHT_CSS } from '../../../utils/styles.universal';

const LIST_ITEM_IS_TAP_HIGHLIGHT = `
  &:active {
    ${HIGHLIGHT_CSS}
  }
`;

export default styled.div`
  ${NO_EDIT_CSS}
  align-items: center;
  display: flex;
  flex-direction: row-reverse;
  height: 100%;
  justify-content: space-between;
  padding-left: 10px;
  width: 63%;
  box-sizing: border-box;
  ${props => (props.isTapHighlight ? LIST_ITEM_IS_TAP_HIGHLIGHT : '')}
`;
