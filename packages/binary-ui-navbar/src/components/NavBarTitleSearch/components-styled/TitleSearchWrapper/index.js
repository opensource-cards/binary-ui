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
  align-items: center;
  background-color: #FFFFFF;
  border-radius: 7px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  padding: 0 0 0 10px;
  width: 100%;
`;
