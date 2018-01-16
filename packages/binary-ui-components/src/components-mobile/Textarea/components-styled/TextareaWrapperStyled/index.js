import { getHighlightEditStyle } from 'binary-ui-styles';
import styled from 'styled-components';

export default styled.div`
  align-content: center;
  align-items: center;
  background-color: #FFFFFF;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  padding-top: 20px;
  ${props => (
    getHighlightEditStyle(
      props.isEdit,
      props.isValid,
      props.isTypingHighlight,
      props.styleBorderColor
    )
  )}
`;
