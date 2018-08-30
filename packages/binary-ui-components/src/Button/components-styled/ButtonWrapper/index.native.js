import { getHighlightEditStyle } from 'binary-ui-styles';
import styled from 'styled-components';

export default styled.View`
  align-items: center;
  background-color: #ffffff;
  flex-direction: row-reverse;
  height: ${props => props.theme.sizeListItemHeight};
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
