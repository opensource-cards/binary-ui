import { getHighlightEditStyle } from 'binary-ui-styles';
import styled from 'styled-components/native';
import { INPUT_HEIGHT } from '../../constants';

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
  background-color: #FFFFFF;
  border-radius: 7px;
  flex: 1;
  flex-direction: row;
  height: ${INPUT_HEIGHT}px;
`;
