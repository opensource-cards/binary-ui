import { LIST_ITEM_HEIGHT, getHighlightEditStyle } from 'binary-ui-styles';
import styled from 'styled-components';

export default styled.div`
  align-items: center;
  box-sizing: border-box;
  cursor: default;
  display: flex;
  flex-direction: row-reverse;
  height: ${LIST_ITEM_HEIGHT}px;
  padding-left: 10px;
  position: relative;
  width: 100%;
  ${props => (
    getHighlightEditStyle(
      props.isEdit,
      props.isValid,
      props.isTypingHighlight,
      props.styleBorderColor
    )
  )}
`;
