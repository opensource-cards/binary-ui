import { FONT_SET_LIGHT_CSS, INPUT_RESET_CSS } from 'binary-ui-styles';
import styled from 'styled-components';

export default styled.TextInput`
  ${INPUT_RESET_CSS}
  ${FONT_SET_LIGHT_CSS}
  color: hsl(0, 0%, 0%);
  flex: 9;
  height: ${props => props.styleHeight}px;
  padding: 10px;
  text-align-vertical: top;
`;
