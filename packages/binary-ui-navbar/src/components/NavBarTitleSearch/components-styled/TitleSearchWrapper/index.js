import { getHighlightEditStyle } from 'binary-ui-styles';
import styled from 'styled-components';

export default styled.div`
  align-items: center;
  background-color: #ffffff;
  border-radius: 7px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  padding: 0 0 0 10px;
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
