import { getHighlightEditStyle } from 'binary-ui-styles';
import styled from 'styled-components';
import { INPUT_HEIGHT } from '../../constants';

export default styled.View`
  align-items: center;
  background-color: #FFFFFF;
  border-radius: 7px;
  flex: 1;
  flex-direction: row;
  height: ${INPUT_HEIGHT}px;
  ${props => (
    getHighlightEditStyle(
      props.isEdit,
      props.isValid,
      props.isTypingHighlight,
      props.styleBorderColor
    )
  )}
`;
