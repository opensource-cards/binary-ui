import { getHighlightEditStyle } from 'binary-ui-styles';
import styled from 'styled-components';

export default styled.View`
  background-color: #ffffff;
  justify-content: space-between;
  flex-direction: row;
  ${props => (
    getHighlightEditStyle(
      props.isEdit,
      props.isValid,
      props.isTypingHighlight,
      props.styleBorderColor
    )
  )}
`;
