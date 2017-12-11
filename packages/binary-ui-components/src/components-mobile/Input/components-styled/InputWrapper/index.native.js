import { LIST_ITEM_HEIGHT, getHighlightEditStyle } from 'binary-ui-styles';
import styled from 'styled-components/native';

export default styled.View`
  ${props => (
    getHighlightEditStyle(
      props.isEdit,
      props.isValid,
      props.isTypingHighlight,
      props.styleBorderColor
    )
  )}
  align-items: center;
  flex-direction: row-reverse;
  height: ${LIST_ITEM_HEIGHT};
  width: 100%;
`;
