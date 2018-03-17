import { FONT_SET_BOLD_CSS, FONT_SET_LIGHT_CSS, INPUT_RESET_CSS } from 'binary-ui-styles';
import styled from 'styled-components';

export default styled.TextInput`
  ${INPUT_RESET_CSS}
  ${props => (props.isBold ? FONT_SET_BOLD_CSS : FONT_SET_LIGHT_CSS)}
  flex: 1;
`;
