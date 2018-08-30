import { getHighlightEditStyle } from 'binary-ui-styles';
import styled from 'styled-components';

export default styled.View`
  align-items: center;
  background-color: #ffffff;
  flex: 1;
  flex-direction: row-reverse;
  height: ${props => props.theme.sizeListItemHeight};
  ${props => (
    getHighlightEditStyle(
      props.isEdit,
      props.isValid,
      props.isTypingHighlight,
      props.styleBorderColor
    )
  )}
`;
