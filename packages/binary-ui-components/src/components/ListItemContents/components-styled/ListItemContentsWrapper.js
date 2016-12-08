import styled from 'styled-components';
import { NO_EDIT_STYLE_WEB, HIGHTLIGHT_STYLE_EXT } from '../../../utils/styles';
import { getHighlightEditStyle } from '../../../utils/styles-api';

const LIST_ITEM_IS_TAP_HIGHLIGHT = `
  &:active {
    ${HIGHTLIGHT_STYLE_EXT}
  }
`;

export default styled.div`
  ${NO_EDIT_STYLE_WEB}
  ${props => getHighlightEditStyle(
    props.isEdit,
    props.isValid,
    props.isTypingHighlight,
    props.borderColor
  )}
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
