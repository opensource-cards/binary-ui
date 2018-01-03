import { FONT_SET_BOLD_CSS, FONT_SET_LIGHT_CSS, OPACITY_DISABLED } from 'binary-ui-styles';
import styled from 'styled-components/native';

export default styled.Text`
  color: ${props => props.styleColor};
  opacity: ${props => (props.isDisabled ? OPACITY_DISABLED : '1')};
  flex: 9;
  padding-left: 10;
  ${props => (props.isBold ? FONT_SET_BOLD_CSS : FONT_SET_LIGHT_CSS)}
`;
