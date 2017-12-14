import { getHighlightEditStyle } from 'binary-ui-styles';
import styled from 'styled-components/native';

export default styled.View`
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
