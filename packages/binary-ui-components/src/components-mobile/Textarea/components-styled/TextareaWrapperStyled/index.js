import { getHighlightEditStyle } from 'binary-ui-styles';
import styled from 'styled-components';

export default styled.div`
  ${props => (
    getHighlightEditStyle(
      props.isEdit,
      props.isValid,
      props.isTypingHighlight,
      props.styleBorderColor
    )
  )}
  align-content: center;
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  padding-top: 20px;
`;
